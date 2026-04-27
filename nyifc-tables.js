(function () {
  'use strict';

  // ─── DATA ────────────────────────────────────────────────────────────────────
  var DATA = {
    apsl: {
      label: 'APSL',
      conference: 'METRO CONFERENCE',
      color: '#E07C4F',
      highlight: 'NY International FC',
      standings: [
        { rank: 1,  team: 'NY Greek Americans',                            gp: 17, w: 14, d: 3, l: 0,  gf: 61, ga: 19, gd: 42,  pts: 45, logo: 'https://apslsoccer.com/MediaContent//2022/08/20/15/1385542_530758417002357_263896856_n_230170.jpeg' },
        { rank: 2,  team: 'Hoboken FC 1912',                               gp: 19, w: 13, d: 2, l: 4,  gf: 61, ga: 29, gd: 32,  pts: 41, logo: 'https://apslsoccer.com/MediaContent//2023/02/28/00/HCF_circle_-_white_231278_235098.png' },
        { rank: 3,  team: 'Lansdowne Yonkers FC',                          gp: 18, w: 13, d: 2, l: 3,  gf: 50, ga: 18, gd: 32,  pts: 41, logo: 'https://apslsoccer.com/MediaContent//2023/04/20/09/Lansdowne%20Yonkers%20FC_235666.png' },
        { rank: 4,  team: 'NY Pancyprian Freedoms',                        gp: 18, w: 13, d: 0, l: 5,  gf: 47, ga: 23, gd: 24,  pts: 39, logo: 'https://apslsoccer.com/MediaContent//2022/08/12/03/NY_Pancyprian_Freedoms_logo_229973.png' },
        { rank: 5,  team: 'Doxa FCW',                                      gp: 18, w: 9, d: 2, l: 7,  gf: 44, ga: 34, gd: 10,  pts: 29, logo: 'https://apslsoccer.com/MediaContent//2022/09/29/14/Doxa_230155_230722.png' },
        { rank: 6,  team: 'Leros SC',                                      gp: 17, w: 7, d: 3, l: 7,  gf: 36, ga: 34, gd: 2,  pts: 24, logo: 'https://apslsoccer.com/MediaContent//2025/07/03/07/u_Leros_1751554635731_1_246975.jpg' },
        { rank: 7,  team: 'Richmond County FC',                            gp: 19, w: 6, d: 4, l: 9,  gf: 41, ga: 53, gd: -12, pts: 22, logo: 'https://apslsoccer.com/MediaContent//2023/09/14/11/Richmond-NEW_239003.png' },
        { rank: 8,  team: 'NY Athletic Club',                              gp: 18, w: 6, d: 0, l: 12,  gf: 35, ga: 44, gd: -9, pts: 18, logo: 'https://apslsoccer.com/MediaContent//2022/08/17/15/nyac_230131.png' },
        { rank: 9,  team: 'NY International FC',                           gp: 19, w: 5, d: 3, l: 11,  gf: 30, ga: 52, gd: -22, pts: 18, logo: 'https://apslsoccer.com/MediaContent//2022/08/08/21/STAR_229908.jpeg' },
        { rank: 10,  team: 'SC Vistula Garfield',                           gp: 18, w: 4, d: 2, l: 12,  gf: 26, ga: 58, gd: -32, pts: 14, logo: 'https://apslsoccer.com/MediaContent//2023/07/21/16/Vistula_237645.jpg' },
        { rank: 11,  team: 'Zum Schneider FC 03',                           gp: 19, w: 5, d: 1, l: 13,  gf: 24, ga: 55, gd: -31, pts: 13, logo: 'https://apslsoccer.com/MediaContent//2022/08/08/18/Screenshot%202022-08-08%20180027_229893.png' },
        { rank: 12,  team: 'Central Park Rangers FC',                       gp: 18, w: 2, d: 2, l: 14,  gf: 24, ga: 60, gd: -36, pts: 8, logo: 'https://apslsoccer.com/MediaContent//2024/09/03/09/cpr_Logo_243235.png' }
      ]
    },
    csl: {
      label: 'CSL',
      conference: 'DIVISION 2',
      color: '#C9A84C',
      highlight: 'NY International FC II',
      standings: [
        { rank: 1,  team: 'NY Galicia',                                    gp: 15, w: 12, d: 2, l: 1,  gf: 68, ga: 22, gd: 46,  pts: 38, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/12/03/18622540_10154401704622007_4567169214813878094_n_229969.jpg' },
        { rank: 2,  team: 'Vibes FC',                                      gp: 16, w: 12, d: 2, l: 2,  gf: 39, ga: 17, gd: 22,  pts: 38, logo: 'https://www.cosmosoccerleague.com/MediaContent//2024/08/22/09/vibes_crest_243171.jpg' },
        { rank: 3,  team: 'Stal Mielec NY',                                gp: 16, w: 11, d: 2, l: 3,  gf: 47, ga: 22, gd: 25,  pts: 35, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/09/04/00/587_230430.png' },
        { rank: 4,  team: 'NY International FC II',                        gp: 16, w: 9, d: 4, l: 3,  gf: 44, ga: 23, gd: 21,  pts: 31, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/08/21/STAR_229908.jpeg' },
        { rank: 5,  team: 'NY Finest FC',                                  gp: 16, w: 10, d: 1, l: 5,  gf: 35, ga: 32, gd: 3,  pts: 31, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/12/03/9689569796895697_229974.jpg' },
        { rank: 6,  team: 'Brooklyn City FC',                              gp: 16, w: 9, d: 3, l: 4,  gf: 40, ga: 20, gd: 20,  pts: 30, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/09/12/14/Brooklyn%20City_230465.png' },
        { rank: 7,  team: 'NY Shamrocks',                                  gp: 14, w: 7, d: 1, l: 6,  gf: 32, ga: 31, gd: 1,  pts: 21, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/09/12/18/Shamrock_230469.jpg' },
        { rank: 8,  team: 'ERFC',                                          gp: 15, w: 5, d: 4, l: 6,  gf: 30, ga: 34, gd: -4, pts: 19, logo: 'https://www.cosmosoccerleague.com/MediaContent//2025/08/28/08/u_PHOTO_2025_07_03_00_32_10_1756395120254_1_81226896_247691.png' },
        { rank: 9,  team: 'Williamsburg International FC',                 gp: 14, w: 4, d: 6, l: 4,  gf: 25, ga: 25, gd: 0,  pts: 18, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/09/23/WIFC_Crest_Green_229943.png' },
        { rank: 10,  team: 'FC Japan',                                      gp: 15, w: 4, d: 4, l: 7,  gf: 24, ga: 28, gd: -4, pts: 16, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/08/20/1_blog_icon_229905.jpeg' },
        { rank: 11,  team: 'Sporting Astoria South Bronx United',           gp: 15, w: 4, d: 3, l: 8,  gf: 32, ga: 29, gd: 3,  pts: 15, logo: 'https://www.cosmosoccerleague.com/MediaContent//2025/04/16/10/u_SASC_Logo_2025_1744823413706_1_245533.jpeg' },
        { rank: 12,  team: 'Central Park Rangers Lower East',               gp: 15, w: 4, d: 2, l: 9,  gf: 23, ga: 46, gd: -23, pts: 14, logo: 'https://www.cosmosoccerleague.com/MediaContent//2024/09/03/09/cpr_Logo_243235.png' },
        { rank: 13,  team: 'Kickoff FC',                                    gp: 15, w: 2, d: 4, l: 9,  gf: 18, ga: 35, gd: -17, pts: 10, logo: 'https://www.cosmosoccerleague.com/MediaContent//2025/07/29/11/u_KOFC_1753812149921_1_247357.jpg' },
        { rank: 14,  team: 'SC Eintracht',                                  gp: 16, w: 3, d: 1, l: 12,  gf: 25, ga: 46, gd: -21, pts: 10, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/08/21/5504_229911.png' },
        { rank: 15,  team: 'Yemen United SC',                               gp: 15, w: 2, d: 2, l: 11,  gf: 23, ga: 55, gd: -32, pts: 7, logo: 'https://www.cosmosoccerleague.com/MediaContent//2025/08/13/13/u_Yemen_1755117666949_1_80271343_247539.jpg' },
        { rank: 16,  team: 'Vllaznia NYC',                                  gp: 15, w: 3, d: 1, l: 11,  gf: 20, ga: 60, gd: -40, pts: 7, logo: 'https://www.cosmosoccerleague.com/MediaContent//2025/08/21/09/u_3fdcf2db_c33b_4548_bb79_6afdaa3f4e28_1755792931493_1_80271343_247646.jpeg' },
        { rank: 17,  team: 'Desportiva Sociedad NY',                        gp: 0, w: 0, d: 0, l: 0,  gf: 0, ga: 0, gd: 0,  pts: 0, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/08/20/3948_229904.png' }
      ]
    },
    cslr: {
      label: 'CSL',
      conference: 'DIVISION 2 RESERVE',
      color: '#5B9BD5',
      highlight: 'NY International FC III',
      standings: [
        { rank: 1,  team: 'NY Finest FC II',                               gp: 16, w: 12, d: 2, l: 2,  gf: 43, ga: 14, gd: 29,  pts: 38, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/12/03/9689569796895697_229974.jpg' },
        { rank: 2,  team: 'NY International FC III',                       gp: 16, w: 8, d: 6, l: 2,  gf: 49, ga: 24, gd: 25,  pts: 30, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/08/21/STAR_229908.jpeg' },
        { rank: 3,  team: 'Sporting Astoria South Bronx United II',        gp: 15, w: 8, d: 3, l: 4,  gf: 40, ga: 23, gd: 17,  pts: 27, logo: 'https://www.cosmosoccerleague.com/MediaContent//2025/04/16/10/u_SASC_Logo_2025_1744823413706_1_245533.jpeg' },
        { rank: 4,  team: 'Central Park Rangers Lower East II',            gp: 15, w: 7, d: 5, l: 3,  gf: 40, ga: 36, gd: 4,  pts: 26, logo: 'https://www.cosmosoccerleague.com/MediaContent//2024/09/03/09/cpr_Logo_243235.png' },
        { rank: 5,  team: 'Stal Mielec NY II',                             gp: 15, w: 8, d: 1, l: 6,  gf: 25, ga: 29, gd: -4, pts: 25, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/09/04/00/587_230430.png' },
        { rank: 6,  team: 'Yemen United SC II',                            gp: 16, w: 7, d: 3, l: 6,  gf: 37, ga: 36, gd: 1,  pts: 24, logo: 'https://www.cosmosoccerleague.com/MediaContent//2025/08/13/13/u_Yemen_1755117666949_1_80271343_247539.jpg' },
        { rank: 7,  team: 'NY Galicia II',                                 gp: 16, w: 6, d: 5, l: 5,  gf: 38, ga: 36, gd: 2,  pts: 23, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/12/03/18622540_10154401704622007_4567169214813878094_n_229969.jpg' },
        { rank: 8,  team: 'NY Shamrocks II',                               gp: 13, w: 6, d: 3, l: 4,  gf: 31, ga: 21, gd: 10,  pts: 21, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/09/12/18/Shamrock_230469.jpg' },
        { rank: 9,  team: 'Brooklyn City FC II',                           gp: 15, w: 5, d: 5, l: 5,  gf: 23, ga: 28, gd: -5, pts: 20, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/09/12/14/Brooklyn%20City_230465.png' },
        { rank: 10,  team: 'Kickoff FC II',                                 gp: 16, w: 5, d: 3, l: 8,  gf: 23, ga: 24, gd: -1, pts: 18, logo: 'https://www.cosmosoccerleague.com/MediaContent//2025/07/29/11/u_KOFC_1753812149921_1_247357.jpg' },
        { rank: 11,  team: 'Williamsburg International FC II',              gp: 15, w: 5, d: 3, l: 7,  gf: 26, ga: 35, gd: -9, pts: 18, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/09/23/WIFC_Crest_Green_229943.png' },
        { rank: 12,  team: 'ERFC II',                                       gp: 16, w: 5, d: 2, l: 9,  gf: 20, ga: 39, gd: -19, pts: 17, logo: 'https://www.cosmosoccerleague.com/MediaContent//2025/08/28/08/u_PHOTO_2025_07_03_00_32_10_1756395120254_1_81226896_247691.png' },
        { rank: 13,  team: 'Vibes FC II',                                   gp: 16, w: 3, d: 7, l: 6,  gf: 21, ga: 32, gd: -11, pts: 16, logo: 'https://www.cosmosoccerleague.com/MediaContent//2024/08/22/09/vibes_crest_243171.jpg' },
        { rank: 14,  team: 'FC Japan II',                                   gp: 15, w: 4, d: 3, l: 8,  gf: 21, ga: 36, gd: -15, pts: 15, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/08/20/1_blog_icon_229905.jpeg' },
        { rank: 15,  team: 'Vllaznia NYC II',                               gp: 15, w: 4, d: 2, l: 9,  gf: 37, ga: 47, gd: -10, pts: 14, logo: 'https://www.cosmosoccerleague.com/MediaContent//2025/08/21/09/u_3fdcf2db_c33b_4548_bb79_6afdaa3f4e28_1755792931493_1_80271343_247646.jpeg' },
        { rank: 16,  team: 'SC Eintracht II',                               gp: 16, w: 2, d: 3, l: 11,  gf: 27, ga: 41, gd: -14, pts: 9, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/08/21/5504_229911.png' },
        { rank: 17,  team: 'Desportiva Sociedad NY II',                     gp: 0, w: 0, d: 0, l: 0,  gf: 0, ga: 0, gd: 0,  pts: 0, logo: 'https://www.cosmosoccerleague.com/MediaContent//2022/08/08/20/3948_229904.png' }
      ]
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
