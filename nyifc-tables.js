(function () {
  'use strict';

  // ─── DATA ────────────────────────────────────────────────────────────────────
  var DATA = {
    csl1: {
      label: 'CSL',
      conference: 'DIVISION 1',
      color: '#C9A84C',
      highlight: 'NY International FC',
      standings: []
    },
    csl1r: {
      label: 'CSL',
      conference: 'DIVISION 1 RESERVE',
      color: '#5B9BD5',
      highlight: 'NY International FC II',
      standings: []
    }
  };

  // ─── CSS ─────────────────────────────────────────────────────────────────────
  var CSS = [
    "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');",
    '*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}',
    ':host{display:block;font-family:"Poppins",sans-serif;color:#fff;overflow:hidden}',
    '.widget{max-width:920px;margin:0 auto;padding:24px 16px 40px;background:transparent}',

    /* ── Header ── */
    '.widget-header{text-align:center;margin-bottom:28px}',
    '.widget-title{font-size:28px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#C9A84C;line-height:1}',
    '.widget-subtitle{font-size:13px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-top:8px}',



    /* ── League section ── */
    '.league-section{margin-bottom:40px;transition:opacity 0.2s;background:#111;border:1px solid #1e1e1e;border-radius:8px;overflow:hidden}',
    '.league-section:last-child{margin-bottom:0}',
    '.league-section.hidden{display:none}',
    '.division-bar{display:flex;align-items:center;gap:10px;padding:10px 14px;margin-bottom:0;border-radius:0;background:#161616;border-bottom:1px solid #1e1e1e}',
    '.division-accent{width:3px;height:18px;border-radius:2px;flex-shrink:0}',
    '.division-title{font-size:16px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,0.9)}',

    /* ── Table ── */
    '.standings-table{width:100%;border-collapse:collapse;background:transparent;border-radius:0;overflow:hidden}',
    '.standings-table thead tr{background:#111;border-bottom:1px solid #1e1e1e}',
    '.standings-table th{font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#C9A84C;padding:10px 8px;text-align:center;white-space:nowrap}',
    '.standings-table th.col-team{text-align:left;padding-left:12px}',
    '.standings-table td{font-size:14px;font-weight:400;padding:10px 8px;text-align:center;color:rgba(255,255,255,0.75);border-bottom:1px solid rgba(255,255,255,0.04)}',
    '.standings-table td.col-team{text-align:left;padding-left:12px;font-weight:500;color:rgba(255,255,255,0.9);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.standings-table td.col-pts{font-weight:700;font-size:15px;color:#fff}',
    '.standings-table td.col-rank{color:rgba(255,255,255,0.35);font-size:13px;width:32px}',
    '.standings-table tbody tr:nth-child(even){background:rgba(255,255,255,0.02)}',
    '.standings-table tbody tr:hover{background:rgba(255,255,255,0.04)}',
    '.standings-table tbody tr.nyifc-row{background:rgba(201,168,76,0.12) !important}',
    '.standings-table tbody tr.nyifc-row:hover{background:rgba(201,168,76,0.18) !important}',
    '.standings-table tbody tr.nyifc-row td{color:#fff}',
    '.standings-table tbody tr.nyifc-row td.col-team{color:#C9A84C;font-weight:600}',
    '.standings-table tbody tr:last-child td{border-bottom:none}',

    /* ── Team logo ── */
    '.team-logo{width:20px;height:20px;object-fit:contain;border-radius:2px;vertical-align:middle;margin-right:8px;flex-shrink:0}',
    '.team-cell-inner{display:flex;align-items:center;gap:0;min-width:0}',
    '.team-cell-inner span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',

    /* ── GD positive/negative ── */
    '.gd-pos{color:rgba(100,220,130,0.85)}',
    '.gd-neg{color:rgba(220,100,100,0.75)}',
    '.gd-zero{color:rgba(255,255,255,0.35)}',

    /* ── Mobile ── */
    '@media(max-width:600px){',
    '.widget{overflow:hidden}',
    '.standings-table{table-layout:fixed;width:100%}',
    '.standings-table th.col-gf,.standings-table td.col-gf,',
    '.standings-table th.col-ga,.standings-table td.col-ga,',
    '.standings-table th.col-gd,.standings-table td.col-gd{display:none}',
    '.standings-table th.col-rank,.standings-table td.col-rank{width:24px}',
    '.standings-table td.col-team{padding-left:6px;overflow:hidden;text-overflow:ellipsis;width:50%}',
    '.standings-table th.col-team{padding-left:6px;width:50%}',
    '.standings-table td{font-size:12px;padding:8px 4px}',
    '.standings-table th{font-size:10px;padding:8px 4px}',
    '.widget{padding:16px 10px 32px}',
    '.team-logo{width:16px;height:16px;margin-right:6px}',
    '.division-title{font-size:13px;letter-spacing:1.5px}',
    '}'
  ].join('\n');

  // ─── HELPERS ─────────────────────────────────────────────────────────────────
  function gdClass(val) {
    if (val > 0) return 'gd-pos';
    if (val < 0) return 'gd-neg';
    return 'gd-zero';
  }

  function gdLabel(val) {
    if (val > 0) return '+' + val;
    return String(val);
  }

  function buildTable(league) {
    var rows = league.standings.map(function (r) {
      var isNYIFC = r.team === league.highlight;
      var rowClass = isNYIFC ? ' class="nyifc-row"' : '';
      var logoHtml = r.logo
        ? '<img class="team-logo" src="' + r.logo + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">'
        : '';
      return [
        '<tr' + rowClass + '>',
        '<td class="col-rank">' + r.rank + '</td>',
        '<td class="col-team"><div class="team-cell-inner">' + logoHtml + '<span>' + r.team + '</span></div></td>',
        '<td>' + r.gp + '</td>',
        '<td>' + r.w + '</td>',
        '<td>' + r.d + '</td>',
        '<td>' + r.l + '</td>',
        '<td class="col-gf">' + r.gf + '</td>',
        '<td class="col-ga">' + r.ga + '</td>',
        '<td class="col-gd ' + gdClass(r.gd) + '">' + gdLabel(r.gd) + '</td>',
        '<td class="col-pts">' + r.pts + '</td>',
        '</tr>'
      ].join('');
    });

    return [
      '<table class="standings-table">',
      '<thead><tr>',
      '<th class="col-rank">#</th>',
      '<th class="col-team">TEAM</th>',
      '<th>GP</th>',
      '<th>W</th>',
      '<th>D</th>',
      '<th>L</th>',
      '<th class="col-gf">GF</th>',
      '<th class="col-ga">GA</th>',
      '<th class="col-gd">GD</th>',
      '<th>PTS</th>',
      '</tr></thead>',
      '<tbody>' + rows.join('') + '</tbody>',
      '</table>'
    ].join('');
  }

  function buildSection(key, league) {
    return [
      '<div class="league-section" data-league="' + key + '">',
      '<div class="division-bar">',
      '<div class="division-accent" style="background:' + league.color + '"></div>',
      '<div class="division-title">' + league.label + ' \u2014 ' + league.conference + '</div>',
      '</div>',
      buildTable(league),
      '</div>'
    ].join('');
  }



  // ─── INIT ─────────────────────────────────────────────────────────────────────
  function init() {
    var root = document.getElementById('nyifc-tables-root');
    if (!root) return;

    // Shadow DOM
    var shadow = root.attachShadow({ mode: 'open' });

    // Build HTML
    var sections = [
      buildSection('csl1',  DATA.csl1),
      buildSection('csl1r', DATA.csl1r)
    ].join('');

    var html = [
      '<style>' + CSS + '</style>',
      '<div class="widget">',
      '<div class="widget-header">',
      '<div class="widget-title">LEAGUE TABLES</div>',
      '<div class="widget-subtitle">2026 / 2027 SEASON</div>',
      '</div>',
      '<div class="tables-container">',
      sections,
      '</div>',
      '</div>'
    ].join('');

    shadow.innerHTML = html;


  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
