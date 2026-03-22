(function () {
  'use strict';

  // ─── DATA ────────────────────────────────────────────────────────────────────
  var DATA = {
    apsl: {
      label: 'APSL',
      conference: 'METROPOLITAN CONFERENCE',
      color: '#E07C4F',
      highlight: 'NY International FC',
      standings: [
        { rank: 1,  team: 'NY Greek Americans',        gp: 15, w: 12, d: 3, l: 0,  gf: 55, ga: 17, gd: 38,  pts: 39 },
        { rank: 2,  team: 'Lansdowne Yonkers FC',      gp: 15, w: 11, d: 2, l: 2,  gf: 43, ga: 13, gd: 30,  pts: 35 },
        { rank: 3,  team: 'NY Pancyprian Freedoms',    gp: 13, w: 9,  d: 0, l: 4,  gf: 34, ga: 16, gd: 18,  pts: 27 },
        { rank: 4,  team: 'Hoboken FC 1912',           gp: 12, w: 8,  d: 2, l: 2,  gf: 44, ga: 18, gd: 26,  pts: 26 },
        { rank: 5,  team: 'Doxa FCW',                  gp: 14, w: 7,  d: 2, l: 5,  gf: 34, ga: 26, gd: 8,   pts: 23 },
        { rank: 6,  team: 'Leros SC',                  gp: 14, w: 5,  d: 3, l: 6,  gf: 25, ga: 28, gd: -3,  pts: 18 },
        { rank: 7,  team: 'Richmond County FC',        gp: 14, w: 5,  d: 3, l: 6,  gf: 28, ga: 40, gd: -12, pts: 18 },
        { rank: 8,  team: 'NY International FC',       gp: 14, w: 4,  d: 2, l: 8,  gf: 21, ga: 39, gd: -18, pts: 14 },
        { rank: 9,  team: 'SC Vistula Garfield',       gp: 15, w: 4,  d: 1, l: 10, gf: 22, ga: 52, gd: -30, pts: 13 },
        { rank: 10, team: 'Zum Schneider FC 03',       gp: 13, w: 4,  d: 0, l: 9,  gf: 17, ga: 38, gd: -21, pts: 9  },
        { rank: 11, team: 'Central Park Rangers FC',   gp: 14, w: 2,  d: 2, l: 10, gf: 20, ga: 43, gd: -23, pts: 8  },
        { rank: 12, team: 'NY Athletic Club',          gp: 13, w: 2,  d: 0, l: 11, gf: 22, ga: 35, gd: -13, pts: 6  }
      ]
    },
    csl: {
      label: 'CSL',
      conference: 'DIVISION 2',
      color: '#C9A84C',
      highlight: 'NY International FC II',
      standings: [
        { rank: 1,  team: 'Vibes FC',                              gp: 11, w: 8, d: 2, l: 1, gf: 27, ga: 9,  gd: 18,  pts: 26 },
        { rank: 2,  team: 'NY International FC II',                gp: 12, w: 7, d: 4, l: 1, gf: 32, ga: 17, gd: 15,  pts: 25 },
        { rank: 3,  team: 'NY Galicia',                            gp: 10, w: 7, d: 2, l: 1, gf: 39, ga: 19, gd: 20,  pts: 23 },
        { rank: 4,  team: 'Brooklyn City FC',                      gp: 12, w: 7, d: 2, l: 3, gf: 29, ga: 13, gd: 16,  pts: 23 },
        { rank: 5,  team: 'Stal Mielec NY',                        gp: 11, w: 7, d: 2, l: 2, gf: 25, ga: 13, gd: 12,  pts: 23 },
        { rank: 6,  team: 'NY Shamrocks',                          gp: 9,  w: 6, d: 1, l: 2, gf: 27, ga: 14, gd: 13,  pts: 19 },
        { rank: 7,  team: 'NY Finest FC',                          gp: 10, w: 5, d: 0, l: 5, gf: 23, ga: 30, gd: -7,  pts: 15 },
        { rank: 8,  team: 'Sporting Astoria South Bronx United',   gp: 11, w: 4, d: 2, l: 5, gf: 26, ga: 18, gd: 8,   pts: 14 },
        { rank: 9,  team: 'FC Japan',                              gp: 11, w: 3, d: 3, l: 5, gf: 16, ga: 19, gd: -3,  pts: 12 },
        { rank: 10, team: 'Central Park Rangers Lower East',       gp: 11, w: 3, d: 2, l: 6, gf: 17, ga: 34, gd: -17, pts: 11 },
        { rank: 11, team: 'ERFC',                                  gp: 9,  w: 3, d: 1, l: 5, gf: 17, ga: 24, gd: -7,  pts: 10 },
        { rank: 12, team: 'Williamsburg International FC',         gp: 10, w: 2, d: 4, l: 4, gf: 15, ga: 20, gd: -5,  pts: 10 },
        { rank: 13, team: 'Kickoff FC',                            gp: 12, w: 2, d: 4, l: 6, gf: 14, ga: 24, gd: -10, pts: 10 },
        { rank: 14, team: 'SC Eintracht',                          gp: 12, w: 3, d: 1, l: 8, gf: 22, ga: 26, gd: -4,  pts: 10 },
        { rank: 15, team: 'Yemen United SC',                       gp: 10, w: 2, d: 1, l: 7, gf: 20, ga: 39, gd: -19, pts: 7  },
        { rank: 16, team: 'Desportiva Sociedad NY',                gp: 0,  w: 0, d: 0, l: 0, gf: 0,  ga: 0,  gd: 0,   pts: 0  },
        { rank: 17, team: 'Vllaznia NYC',                          gp: 9,  w: 0, d: 1, l: 8, gf: 7,  ga: 37, gd: -30, pts: -2 }
      ]
    },
    cslr: {
      label: 'CSL RESERVE',
      conference: 'DIVISION 2 RESERVE',
      color: '#5B9BD5',
      highlight: 'NY International FC III',
      standings: [
        { rank: 1,  team: 'NY International FC III',               gp: 12, w: 7, d: 3, l: 2, gf: 44, ga: 21, gd: 23,  pts: 24 },
        { rank: 2,  team: 'NY Finest FC II',                       gp: 10, w: 7, d: 2, l: 1, gf: 26, ga: 8,  gd: 18,  pts: 23 },
        { rank: 3,  team: 'Central Park Rangers Lower East II',    gp: 11, w: 6, d: 2, l: 3, gf: 31, ga: 28, gd: 3,   pts: 20 },
        { rank: 4,  team: 'Sporting Astoria South Bronx United II',gp: 11, w: 6, d: 1, l: 4, gf: 33, ga: 21, gd: 12,  pts: 19 },
        { rank: 5,  team: 'NY Shamrocks II',                       gp: 10, w: 6, d: 1, l: 3, gf: 28, ga: 17, gd: 11,  pts: 19 },
        { rank: 6,  team: 'Brooklyn City FC II',                   gp: 12, w: 4, d: 4, l: 4, gf: 18, ga: 24, gd: -6,  pts: 16 },
        { rank: 7,  team: 'Yemen United SC II',                    gp: 10, w: 5, d: 1, l: 4, gf: 22, ga: 24, gd: -2,  pts: 16 },
        { rank: 8,  team: 'Stal Mielec NY II',                     gp: 11, w: 5, d: 1, l: 5, gf: 18, ga: 23, gd: -5,  pts: 16 },
        { rank: 9,  team: 'Williamsburg International FC II',      gp: 11, w: 4, d: 3, l: 4, gf: 22, ga: 23, gd: -1,  pts: 15 },
        { rank: 10, team: 'Kickoff FC II',                         gp: 11, w: 4, d: 2, l: 5, gf: 19, ga: 19, gd: 0,   pts: 14 },
        { rank: 11, team: 'NY Galicia II',                         gp: 10, w: 3, d: 2, l: 5, gf: 22, ga: 28, gd: -6,  pts: 11 },
        { rank: 12, team: 'Vllaznia NYC II',                       gp: 10, w: 3, d: 2, l: 5, gf: 23, ga: 30, gd: -7,  pts: 11 },
        { rank: 13, team: 'ERFC II',                               gp: 10, w: 3, d: 2, l: 5, gf: 17, ga: 27, gd: -10, pts: 11 },
        { rank: 14, team: 'SC Eintracht II',                       gp: 12, w: 2, d: 3, l: 7, gf: 25, ga: 31, gd: -6,  pts: 9  },
        { rank: 15, team: 'FC Japan II',                           gp: 11, w: 2, d: 3, l: 6, gf: 13, ga: 26, gd: -13, pts: 9  },
        { rank: 16, team: 'Vibes FC II',                           gp: 10, w: 1, d: 4, l: 5, gf: 11, ga: 22, gd: -11, pts: 7  },
        { rank: 17, team: 'Desportiva Sociedad NY II',             gp: 0,  w: 0, d: 0, l: 0, gf: 0,  ga: 0,  gd: 0,   pts: 0  }
      ]
    }
  };

  // ─── CSS ─────────────────────────────────────────────────────────────────────
  var CSS = [
    "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');",
    '*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}',
    ':host{display:block;font-family:"Poppins",sans-serif;background:#0d0d0d;color:#fff}',
    '.widget{max-width:920px;margin:0 auto;padding:24px 16px 40px}',

    /* ── Header ── */
    '.widget-header{text-align:center;margin-bottom:28px}',
    '.widget-title{font-size:22px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#C9A84C;line-height:1}',
    '.widget-subtitle{font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-top:6px}',



    /* ── League section ── */
    '.league-section{margin-bottom:36px;transition:opacity 0.2s}',
    '.league-section.hidden{display:none}',
    '.division-bar{display:flex;align-items:center;gap:10px;padding:10px 14px;margin-bottom:0;border-radius:6px 6px 0 0;background:#111}',
    '.division-accent{width:3px;height:18px;border-radius:2px;flex-shrink:0}',
    '.division-title{font-size:16px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,0.9)}',

    /* ── Table ── */
    '.standings-table{width:100%;border-collapse:collapse;background:#0f0f0f;border-radius:0 0 6px 6px;overflow:hidden}',
    '.standings-table thead tr{background:#111;border-bottom:1px solid #1e1e1e}',
    '.standings-table th{font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#C9A84C;padding:10px 8px;text-align:center;white-space:nowrap}',
    '.standings-table th.col-team{text-align:left;padding-left:12px}',
    '.standings-table td{font-size:14px;font-weight:400;padding:10px 8px;text-align:center;color:rgba(255,255,255,0.75);border-bottom:1px solid rgba(255,255,255,0.04)}',
    '.standings-table td.col-team{text-align:left;padding-left:12px;font-weight:500;color:rgba(255,255,255,0.9)}',
    '.standings-table td.col-pts{font-weight:700;font-size:15px;color:#fff}',
    '.standings-table td.col-rank{color:rgba(255,255,255,0.35);font-size:13px;width:32px}',
    '.standings-table tbody tr:nth-child(even){background:rgba(255,255,255,0.02)}',
    '.standings-table tbody tr:hover{background:rgba(255,255,255,0.04)}',
    '.standings-table tbody tr.nyifc-row{background:rgba(201,168,76,0.12) !important}',
    '.standings-table tbody tr.nyifc-row:hover{background:rgba(201,168,76,0.18) !important}',
    '.standings-table tbody tr.nyifc-row td{color:#fff}',
    '.standings-table tbody tr.nyifc-row td.col-team{color:#C9A84C;font-weight:600}',
    '.standings-table tbody tr:last-child td{border-bottom:none}',

    /* ── GD positive/negative ── */
    '.gd-pos{color:rgba(100,220,130,0.85)}',
    '.gd-neg{color:rgba(220,100,100,0.75)}',
    '.gd-zero{color:rgba(255,255,255,0.35)}',

    /* ── Mobile ── */
    '@media(max-width:600px){',
    '.standings-table th.col-gf,.standings-table td.col-gf,',
    '.standings-table th.col-ga,.standings-table td.col-ga,',
    '.standings-table th.col-gd,.standings-table td.col-gd{display:none}',
    '.standings-table td{font-size:12px;padding:8px 5px}',
    '.standings-table td.col-team{padding-left:8px}',
    '.standings-table th{font-size:10px;padding:8px 5px}',
    '.standings-table th.col-team{padding-left:8px}',
    '.widget{padding:16px 10px 32px}',
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
      return [
        '<tr' + rowClass + '>',
        '<td class="col-rank">' + r.rank + '</td>',
        '<td class="col-team">' + r.team + '</td>',
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
      buildSection('apsl', DATA.apsl),
      buildSection('csl',  DATA.csl),
      buildSection('cslr', DATA.cslr)
    ].join('');

    var html = [
      '<style>' + CSS + '</style>',
      '<div class="widget">',
      '<div class="widget-header">',
      '<div class="widget-title">LEAGUE TABLES</div>',
      '<div class="widget-subtitle">2025 / 2026 SEASON</div>',
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
