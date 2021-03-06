(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableAfZA = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Afrikaans translation
   * Author: Phillip Kruger <phillip.kruger@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['af-ZA'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Besig om te laai, wag asseblief';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekords per bladsy';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Resultate ' + pageFrom + ' tot ' + pageTo + ' van ' + totalRows + ' rye';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Soek';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Geen rekords gevind nie';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Wys/verberg bladsy nummering';
      },
      formatRefresh: function formatRefresh() {
        return 'Herlaai';
      },
      formatToggle: function formatToggle() {
        return 'Wissel';
      },
      formatColumns: function formatColumns() {
        return 'Kolomme';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['af-ZA']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableArSA = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table English translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ar-SA'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '???????? ??????????????, ???????? ????????????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0633\u062C\u0644 \u0644\u0643\u0644 \u0635\u0641\u062D\u0629';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0627\u0644\u0638\u0627\u0647\u0631 ' + pageFrom + ' \u0625\u0644\u0649 ' + pageTo + ' \u0645\u0646 ' + totalRows + ' \u0633\u062C\u0644';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return '??????';
      },
      formatNoMatches: function formatNoMatches() {
        return '???? ???????? ?????????? ???????????? ??????????';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        /* eslint-disable no-useless-escape */
        return '??????????\?????????? ?????????? ??????????????';
      },
      formatRefresh: function formatRefresh() {
        return '??????????';
      },
      formatToggle: function formatToggle() {
        return '??????????';
      },
      formatColumns: function formatColumns() {
        return '??????????';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ar-SA']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableCaES = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Catalan translation
   * Authors: Marc Pina<iwalkalone69@gmail.com>
   *          Claudi Martinez<claudix.kernel@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ca-ES'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Espereu, si us plau';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' resultats per p\xE0gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrant de ' + pageFrom + ' fins ' + pageTo + ' - total ' + totalRows + ' resultats';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Cerca';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No s\'han trobat resultats';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Amaga/Mostra paginaci??';
      },
      formatRefresh: function formatRefresh() {
        return 'Refresca';
      },
      formatToggle: function formatToggle() {
        return 'Alterna formataci??';
      },
      formatColumns: function formatColumns() {
        return 'Columnes';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Tots';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ca-ES']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableCsCZ = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Czech translation
   * Author: Lukas Kral (monarcha@seznam.cz)
   * Author: Jakub Svestka <svestka1999@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['cs-CZ'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '??ekejte, pros??m';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' polo\u017Eek na str\xE1nku';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Zobrazena ' + pageFrom + '. - ' + pageTo + '. polo\u017Eka z celkov\xFDch ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Vyhled??v??n??';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nenalezena ????dn?? vyhovuj??c?? polo??ka';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Skr??t/Zobrazit str??nkov??n??';
      },
      formatRefresh: function formatRefresh() {
        return 'Aktualizovat';
      },
      formatToggle: function formatToggle() {
        return 'P??epni';
      },
      formatColumns: function formatColumns() {
        return 'Sloupce';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'V??e';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['cs-CZ']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableDaDK = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table danish translation
   * Author: Your Name Jan Borup Coyle, github@coyle.dk
   */
  (function ($) {
    $.fn.bootstrapTable.locales['da-DK'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Indl??ser, vent venligst';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' poster pr side';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Viser ' + pageFrom + ' til ' + pageTo + ' af ' + totalRows + ' r\xE6kke' + (totalRows > 1 ? 'r' : '');
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Viser ' + totalRows + ' r\xE6kke' + (totalRows > 1 ? 'r' : '');
      },
      formatSearch: function formatSearch() {
        return 'S??g';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Ingen poster fundet';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Skjul/vis nummerering';
      },
      formatRefresh: function formatRefresh() {
        return 'Opdater';
      },
      formatToggle: function formatToggle() {
        return 'Skift';
      },
      formatColumns: function formatColumns() {
        return 'Kolonner';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Alle';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Eksporter';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Ryd filtre';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['da-DK']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableDeDE = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
  * Bootstrap Table German translation
  * Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
  */
  (function ($) {
    $.fn.bootstrapTable.locales['de-DE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Lade, bitte warten';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' Zeilen pro Seite.';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Zeige Zeile ' + pageFrom + ' bis ' + pageTo + ' von ' + totalRows + ' Zeile' + (totalRows > 1 ? 'n' : '') + '.';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Zeige ' + totalRows + ' Zeile' + (totalRows > 1 ? 'n' : '') + '.';
      },
      formatSearch: function formatSearch() {
        return 'Suchen';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Keine passenden Ergebnisse gefunden';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Verstecke/Zeige Nummerierung';
      },
      formatRefresh: function formatRefresh() {
        return 'Neu laden';
      },
      formatToggle: function formatToggle() {
        return 'Umschalten';
      },
      formatColumns: function formatColumns() {
        return 'Spalten';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Alle';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Datenexport';
      },
      formatClearFilters: function formatClearFilters() {
        return 'L??sche Filter';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['de-DE']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableElGR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Greek translation
   * Author: giannisdallas
   */
  (function ($) {
    $.fn.bootstrapTable.locales['el-GR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '????????????????, ???????????????? ????????????????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1 \u03B1\u03BD\u03AC \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0395\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD ' + pageFrom + ' \u03C9\u03C2 \u03C4\u03B7\u03BD ' + pageTo + ' \u03B1\u03C0\u03CC \u03C3\u03CD\u03BD\u03BF\u03BB\u03BF ' + totalRows + ' \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return '????????????????????';
      },
      formatNoMatches: function formatNoMatches() {
        return '?????? ???????????????? ????????????????????????';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Refresh';
      },
      formatToggle: function formatToggle() {
        return 'Toggle';
      },
      formatColumns: function formatColumns() {
        return 'Columns';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['el-GR']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableEnUS = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table English translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['en-US'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Loading, please wait';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rows per page';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Showing ' + pageFrom + ' to ' + pageTo + ' of ' + totalRows + ' rows';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Search';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No matching records found';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Refresh';
      },
      formatToggle: function formatToggle() {
        return 'Toggle';
      },
      formatColumns: function formatColumns() {
        return 'Columns';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['en-US']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableEsAR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Spanish (Argentina) translation
   * Author: Felix Vera (felix.vera@gmail.com)
   */
  (function ($) {
    $.fn.bootstrapTable.locales['es-AR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, espere por favor';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' filas';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se encontraron registros';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Refresh';
      },
      formatToggle: function formatToggle() {
        return 'Toggle';
      },
      formatColumns: function formatColumns() {
        return 'Columns';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-AR']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableEsCL = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Traducci??n de librer??a Bootstrap Table a Espa??ol (Chile)
   * @author Brian ??lvarez Az??car
   * email brianalvarezazocar@gmail.com
   */
  (function ($) {
    $.fn.bootstrapTable.locales['es-CL'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, espere por favor';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' filas por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' filas';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se encontraron registros';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Ocultar/Mostrar paginaci\xF3n';
      },
      formatRefresh: function formatRefresh() {
        return 'Refrescar';
      },
      formatToggle: function formatToggle() {
        return 'Cambiar';
      },
      formatColumns: function formatColumns() {
        return 'Columnas';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CL']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableEsCR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Spanish (Costa Rica) translation
   * Author: Dennis Hern??ndez (http://djhvscf.github.io/Blog/)
   */
  (function ($) {
    $.fn.bootstrapTable.locales['es-CR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, por favor espere';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando de ' + pageFrom + ' a ' + pageTo + ' registros de ' + totalRows + ' registros en total';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se encontraron registros';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Refrescar';
      },
      formatToggle: function formatToggle() {
        return 'Alternar';
      },
      formatColumns: function formatColumns() {
        return 'Columnas';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CR']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableEsES = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Spanish Spain translation
   * Author: Marc Pina<iwalkalone69@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['es-ES'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Por favor espere';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' resultados por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando desde ' + pageFrom + ' hasta ' + pageTo + ' - En total ' + totalRows + ' resultados';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se encontraron resultados';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Ocultar/Mostrar paginaci??n';
      },
      formatRefresh: function formatRefresh() {
        return 'Refrescar';
      },
      formatToggle: function formatToggle() {
        return 'Ocultar/Mostrar';
      },
      formatColumns: function formatColumns() {
        return 'Columnas';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todos';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },

      formatExport: function formatExport() {
        return 'Exportar los datos';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Borrar los filtros';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },

      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'B??squeda avanzada';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Cerrar';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableEsMX = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Spanish (M??xico) translation (Obtenido de traducci??n de Argentina)
   * Author: Felix Vera (felix.vera@gmail.com)
   * Copiado: Mauricio Vera (mauricioa.vera@gmail.com)
   * Revisi??n: J Manuel Corona (jmcg92@gmail.com) (13/Feb/2018).
   */
  (function ($) {
    $.fn.bootstrapTable.locales['es-MX'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, espere por favor';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' filas';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Mostrando ' + totalRows + ' filas';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se encontraron registros que coincidan';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Mostrar/ocultar paginaci??n';
      },
      formatRefresh: function formatRefresh() {
        return 'Actualizar';
      },
      formatToggle: function formatToggle() {
        return 'Cambiar vista';
      },
      formatColumns: function formatColumns() {
        return 'Columnas';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Pantalla completa';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-MX']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableEsNI = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Spanish (Nicaragua) translation
   * Author: Dennis Hern??ndez (http://djhvscf.github.io/Blog/)
   */
  (function ($) {
    $.fn.bootstrapTable.locales['es-NI'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, por favor espere';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando de ' + pageFrom + ' a ' + pageTo + ' registros de ' + totalRows + ' registros en total';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se encontraron registros';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Refrescar';
      },
      formatToggle: function formatToggle() {
        return 'Alternar';
      },
      formatColumns: function formatColumns() {
        return 'Columnas';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-NI']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableEsSP = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Spanish (Espa??a) translation
   * Author: Antonio P??rez <anpegar@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['es-SP'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, por favor espera';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p&#225;gina.';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return pageFrom + ' - ' + pageTo + ' de ' + totalRows + ' registros.';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se han encontrado registros.';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Actualizar';
      },
      formatToggle: function formatToggle() {
        return 'Alternar';
      },
      formatColumns: function formatColumns() {
        return 'Columnas';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-SP']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableEtEE = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Estonian translation
   * Author: kristjan@logist.it>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['et-EE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'P??ring k??ib, palun oota';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rida lehe kohta';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'N\xE4itan tulemusi ' + pageFrom + ' kuni ' + pageTo + ' - kokku ' + totalRows + ' tulemust';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Otsi';
      },
      formatNoMatches: function formatNoMatches() {
        return 'P??ringu tingimustele ei vastanud ??htegi tulemust';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'N??ita/Peida lehtedeks jagamine';
      },
      formatRefresh: function formatRefresh() {
        return 'V??rskenda';
      },
      formatToggle: function formatToggle() {
        return 'L??lita';
      },
      formatColumns: function formatColumns() {
        return 'Veerud';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'K??ik';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['et-EE']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableEuEU = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Basque (Basque Country) translation
   * Author: Iker Ibarguren Berasaluze<ikerib@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['eu-EU'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Itxaron mesedez';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' emaitza orriko.';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return totalRows + ' erregistroetatik ' + pageFrom + 'etik ' + pageTo + 'erakoak erakusten.';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Bilatu';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Ez da emaitzarik aurkitu';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Ezkutatu/Erakutsi orrikatzea';
      },
      formatRefresh: function formatRefresh() {
        return 'Eguneratu';
      },
      formatToggle: function formatToggle() {
        return 'Ezkutatu/Erakutsi';
      },
      formatColumns: function formatColumns() {
        return 'Zutabeak';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Guztiak';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['eu-EU']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableFaIR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Persian translation
   * Author: MJ Vakili <mjv.1989@Gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['fa-IR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '???? ?????? ????????????????, ???????? ?????? ????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0631\u06A9\u0648\u0631\u062F \u062F\u0631 \u0635\u0641\u062D\u0647';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0646\u0645\u0627\u06CC\u0634 ' + pageFrom + ' \u062A\u0627 ' + pageTo + ' \u0627\u0632 ' + totalRows + ' \u0631\u062F\u06CC\u0641';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return '??????????';
      },
      formatNoMatches: function formatNoMatches() {
        return '???????????? ???????? ??????.';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return '??????????/???????? ???????? ????????';
      },
      formatRefresh: function formatRefresh() {
        return '???? ?????? ??????????';
      },
      formatToggle: function formatToggle() {
        return '?????????? ??????????';
      },
      formatColumns: function formatColumns() {
        return '?????? ????';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return '??????';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fa-IR']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableFiFI = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Finnish translations
   * Author: Minna Lehtom??ki <minna.j.lehtomaki@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['fi-FI'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Ladataan, ole hyv?? ja odota';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rivi\xE4 sivulla';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'N\xE4ytet\xE4\xE4n rivit ' + pageFrom + ' - ' + pageTo + ' / ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Hae';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Hakuehtoja vastaavia tuloksia ei l??ytynyt';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'N??yt??/Piilota sivutus';
      },
      formatRefresh: function formatRefresh() {
        return 'P??ivit??';
      },
      formatToggle: function formatToggle() {
        return 'Valitse';
      },
      formatColumns: function formatColumns() {
        return 'Sarakkeet';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Kaikki';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Vie tiedot';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Poista suodattimet';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fi-FI']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableFrBE = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table French (Belgium) translation
   * Author: Julien Bisconti (julien.bisconti@gmail.com)
   */
  (function ($) {
    $.fn.bootstrapTable.locales['fr-BE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Chargement en cours';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' entr\xE9es par page';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Affiche de' + pageFrom + ' \xE0 ' + pageTo + ' sur ' + totalRows + ' lignes';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Recherche';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Pas de fichiers trouv??s';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Refresh';
      },
      formatToggle: function formatToggle() {
        return 'Toggle';
      },
      formatColumns: function formatColumns() {
        return 'Columns';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-BE']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableFrFR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table French (France) translation
   * Author: Dennis Hern??ndez (http://djhvscf.github.io/Blog/)
   * Modification: Tidalf (https://github.com/TidalfFR)
   */
  (function ($) {
    $.fn.bootstrapTable.locales['fr-FR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Chargement en cours, patientez, s??il vous pla??t';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' lignes par page';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Affichage des lignes ' + pageFrom + ' \xE0 ' + pageTo + ' sur ' + totalRows + ' lignes au total';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Rechercher';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Aucun r??sultat trouv??';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Montrer/Masquer pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Rafra??chir';
      },
      formatToggle: function formatToggle() {
        return 'Alterner';
      },
      formatColumns: function formatColumns() {
        return 'Colonnes';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Tous';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Exporter les donn??es';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Vider les filtres';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Recherche avanc??e';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Fermer';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-FR']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableHeIL = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Hebrew translation
   * Author: legshooter
   */
  (function ($) {
    $.fn.bootstrapTable.locales['he-IL'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '????????, ???? ????????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u05DE\u05E6\u05D9\u05D2 ' + pageFrom + ' \u05E2\u05D3 ' + pageTo + ' \u05DE-' + totalRows + ' \u05E9\u05D5\u05E8\u05D5\u05EA';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return '??????????';
      },
      formatNoMatches: function formatNoMatches() {
        return '???? ?????????? ???????????? ????????????';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return '????????/?????? ?????????? ????????';
      },
      formatRefresh: function formatRefresh() {
        return '????????';
      },
      formatToggle: function formatToggle() {
        return '???????? ??????????';
      },
      formatColumns: function formatColumns() {
        return '????????????';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return '??????';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['he-IL']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableHrHR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
  * Bootstrap Table Croatian translation
  * Author: Petra ??trbenac (petra.strbenac@gmail.com)
  * Author: Petra ??trbenac (petra.strbenac@gmail.com)
  */
  (function ($) {
    $.fn.bootstrapTable.locales['hr-HR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Molimo pri??ekajte';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' broj zapisa po stranici';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Prikazujem ' + pageFrom + '. - ' + pageTo + '. od ukupnog broja zapisa ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Pretra??i';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nije prona??en niti jedan zapis';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Prika??i/sakrij stranice';
      },
      formatRefresh: function formatRefresh() {
        return 'Osvje??i';
      },
      formatToggle: function formatToggle() {
        return 'Promijeni prikaz';
      },
      formatColumns: function formatColumns() {
        return 'Kolone';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Sve';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hr-HR']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableHuHU = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Hungarian translation
   * Author: Nagy Gergely <info@nagygergely.eu>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['hu-HU'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Bet??lt??s, k??rem v??rjon';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekord per oldal';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Megjelen\xEDtve ' + pageFrom + ' - ' + pageTo + ' / ' + totalRows + ' \xF6sszesen';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Keres??s';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nincs tal??lat';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Lapoz?? elrejt??se/megjelen??t??se';
      },
      formatRefresh: function formatRefresh() {
        return 'Friss??t??s';
      },
      formatToggle: function formatToggle() {
        return '??sszecsuk/Kinyit';
      },
      formatColumns: function formatColumns() {
        return 'Oszlopok';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return '??sszes';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hu-HU']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableIdID = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Indonesian translation
   * Author: Andre Gardiner<andre@sirdre.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['id-ID'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Memuat, mohon tunggu';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' baris per halaman';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Menampilkan ' + pageFrom + ' sampai ' + pageTo + ' dari ' + totalRows + ' baris';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Pencarian';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Tidak ditemukan data yang cocok';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Sembunyikan/Tampilkan halaman';
      },
      formatRefresh: function formatRefresh() {
        return 'Muat ulang';
      },
      formatToggle: function formatToggle() {
        return 'Beralih';
      },
      formatColumns: function formatColumns() {
        return 'kolom';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Semua';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Ekspor data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Bersihkan filter';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableItIT = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Italian translation
   * Author: Davide Renzi<davide.renzi@gmail.com>
   * Author: Davide Borsatto <davide.borsatto@gmail.com>
   * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['it-IT'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Caricamento in corso';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' elementi per pagina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Visualizzazione da ' + pageFrom + ' a ' + pageTo + ' di ' + totalRows + ' elementi';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Cerca';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nessun elemento trovato';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Nascondi/Mostra paginazione';
      },
      formatRefresh: function formatRefresh() {
        return 'Aggiorna';
      },
      formatToggle: function formatToggle() {
        return 'Attiva/Disattiva';
      },
      formatColumns: function formatColumns() {
        return 'Colonne';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Tutto';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Esporta dati';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Pulisci filtri';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['it-IT']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableJaJP = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Japanese translation
   * Author: Azamshul Azizy <azamshul@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ja-JP'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '??????????????????????????????????????????????????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return '\u30DA\u30FC\u30B8\u5F53\u305F\u308A\u6700\u5927' + pageNumber + '\u4EF6';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u5168' + totalRows + '\u4EF6\u304B\u3089\u3001' + pageFrom + '\u304B\u3089' + pageTo + '\u4EF6\u76EE\u307E\u3067\u8868\u793A\u3057\u3066\u3044\u307E\u3059';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return '??????';
      },
      formatNoMatches: function formatNoMatches() {
        return '????????????????????????????????????????????????';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return '?????????????????????????????????';
      },
      formatRefresh: function formatRefresh() {
        return '??????';
      },
      formatToggle: function formatToggle() {
        return '?????????';
      },
      formatColumns: function formatColumns() {
        return '???';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return '?????????';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ja-JP']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableKaGE = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Georgian translation
   * Author: Levan Lotuashvili <l.lotuashvili@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ka-GE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '???????????????????????????, ?????????????????? ????????????????????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10D7\u10D8\u10D7\u10DD \u10D2\u10D5\u10D4\u10E0\u10D3\u10D6\u10D4';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u10DC\u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D8\u10D0 ' + pageFrom + '-\u10D3\u10D0\u10DC ' + pageTo + '-\u10DB\u10D3\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10EF\u10D0\u10DB\u10E3\u10E0\u10D8 ' + totalRows + '-\u10D3\u10D0\u10DC';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return '???????????????';
      },
      formatNoMatches: function formatNoMatches() {
        return '?????????????????????????????? ?????? ????????????';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return '??????????????????????????? ???????????????????????????????????? ?????????????????????/????????????????????????';
      },
      formatRefresh: function formatRefresh() {
        return '???????????????????????????';
      },
      formatToggle: function formatToggle() {
        return '??????????????????/????????????????????????';
      },
      formatColumns: function formatColumns() {
        return '?????????????????????';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ka-GE']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableKoKR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Korean translation
   * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ko-KR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '???????????? ???????????? ????????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return '\uD398\uC774\uC9C0 \uB2F9 ' + pageNumber + '\uAC1C \uB370\uC774\uD130 \uCD9C\uB825';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\uC804\uCCB4 ' + totalRows + '\uAC1C \uC911 ' + pageFrom + '~' + pageTo + '\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825,';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return '??????';
      },
      formatNoMatches: function formatNoMatches() {
        return '????????? ???????????? ????????????.';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return '?????? ??????';
      },
      formatToggle: function formatToggle() {
        return '??????';
      },
      formatColumns: function formatColumns() {
        return '?????? ?????????';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ko-KR']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableMsMY = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Malay translation
   * Author: Azamshul Azizy <azamshul@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ms-MY'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Permintaan sedang dimuatkan. Sila tunggu sebentar';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekod setiap muka surat';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Sedang memaparkan rekod ' + pageFrom + ' hingga ' + pageTo + ' daripada jumlah ' + totalRows + ' rekod';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Cari';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Tiada rekod yang menyamai permintaan';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Tunjuk/sembunyi muka surat';
      },
      formatRefresh: function formatRefresh() {
        return 'Muatsemula';
      },
      formatToggle: function formatToggle() {
        return 'Tukar';
      },
      formatColumns: function formatColumns() {
        return 'Lajur';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Semua';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ms-MY']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableNbNO = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table norwegian translation
   * Author: Jim Nordb??, jim@nordb.no
   */
  (function ($) {
    $.fn.bootstrapTable.locales['nb-NO'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Oppdaterer, vennligst vent';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' poster pr side';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Viser ' + pageFrom + ' til ' + pageTo + ' av ' + totalRows + ' rekker';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'S??k';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Ingen poster funnet';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Oppdater';
      },
      formatToggle: function formatToggle() {
        return 'Endre';
      },
      formatColumns: function formatColumns() {
        return 'Kolonner';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nb-NO']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableNlNL = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Dutch translation
   * Author: Your Name <info@a2hankes.nl>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['nl-NL'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Laden, even geduld';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' records per pagina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Toon ' + pageFrom + ' tot ' + pageTo + ' van ' + totalRows + ' record' + (totalRows > 1 ? 's' : '');
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Toon ' + totalRows + ' record' + (totalRows > 1 ? 's' : '');
      },
      formatSearch: function formatSearch() {
        return 'Zoeken';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Geen resultaten gevonden';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Verberg/Toon paginatie';
      },
      formatRefresh: function formatRefresh() {
        return 'Vernieuwen';
      },
      formatToggle: function formatToggle() {
        return 'Omschakelen';
      },
      formatColumns: function formatColumns() {
        return 'Kolommen';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Alle';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Exporteer data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Verwijder filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-NL']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTablePlPL = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Polish translation
   * Author: zergu <michal.zagdan @ gmail com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['pl-PL'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '??adowanie, prosz?? czeka??';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekord\xF3w na stron\u0119';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Wy\u015Bwietlanie rekord\xF3w od ' + pageFrom + ' do ' + pageTo + ' z ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Szukaj';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Niestety, nic nie znaleziono';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Od??wie??';
      },
      formatToggle: function formatToggle() {
        return 'Prze????cz';
      },
      formatColumns: function formatColumns() {
        return 'Kolumny';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pl-PL']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTablePtBR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Brazilian Portuguese Translation
   * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
   * Update: Jo??o Mello<jmello@hotmail.com.br>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['pt-BR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Carregando, aguarde';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Exibindo ' + pageFrom + ' at\xE9 ' + pageTo + ' de ' + totalRows + ' linhas';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Pesquisar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nenhum registro encontrado';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Ocultar/Exibir pagina????o';
      },
      formatRefresh: function formatRefresh() {
        return 'Recarregar';
      },
      formatToggle: function formatToggle() {
        return 'Alternar';
      },
      formatColumns: function formatColumns() {
        return 'Colunas';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTablePtPT = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Portuguese Portugal Translation
   * Author: Burnspirit<burnspirit@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['pt-PT'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'A carregar, por favor aguarde';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registos por p&aacute;gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'A mostrar ' + pageFrom + ' at&eacute; ' + pageTo + ' de ' + totalRows + ' linhas';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Pesquisa';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nenhum registo encontrado';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Esconder/Mostrar pagina&ccedil&atilde;o';
      },
      formatRefresh: function formatRefresh() {
        return 'Atualizar';
      },
      formatToggle: function formatToggle() {
        return 'Alternar';
      },
      formatColumns: function formatColumns() {
        return 'Colunas';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Tudo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-PT']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableRoRO = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Romanian translation
   * Author: cristake <cristianiosif@me.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ro-RO'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Se incarca, va rugam asteptati';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' inregistrari pe pagina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Arata de la ' + pageFrom + ' pana la ' + pageTo + ' din ' + totalRows + ' randuri';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Cauta';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nu au fost gasite inregistrari';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Ascunde/Arata paginatia';
      },
      formatRefresh: function formatRefresh() {
        return 'Reincarca';
      },
      formatToggle: function formatToggle() {
        return 'Comuta';
      },
      formatColumns: function formatColumns() {
        return 'Coloane';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Toate';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ro-RO']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableRuRU = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Russian translation
   * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ru-RU'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '????????????????????, ??????????????????, ???????? ????????????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 ' + pageFrom + ' \u043F\u043E ' + pageTo + ' \u0438\u0437 ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return '??????????';
      },
      formatNoMatches: function formatNoMatches() {
        return '???????????? ???? ??????????????';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return '????????????????';
      },
      formatToggle: function formatToggle() {
        return '??????????????????????';
      },
      formatColumns: function formatColumns() {
        return '??????????????';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return '???????????????? ??????????????';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableSkSK = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Slovak translation
   * Author: Jozef D??c<jozef.d13@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['sk-SK'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Pros??m ??akajte';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' z\xE1znamov na stranu';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Zobrazen\xE1 ' + pageFrom + '. - ' + pageTo + '. polo\u017Eka z celkov\xFDch ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Vyh??ad??vanie';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nen??jden?? ??iadna vyhovuj??ca polo??ka';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Skry/Zobraz str??nkovanie';
      },
      formatRefresh: function formatRefresh() {
        return 'Obnovi??';
      },
      formatToggle: function formatToggle() {
        return 'Prepni';
      },
      formatColumns: function formatColumns() {
        return 'St??pce';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'V??etky';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Exportuj d??ta';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Odstr???? filtre';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sk-SK']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableSvSE = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Swedish translation
   * Author: C Bratt <bratt@inix.se>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['sv-SE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Laddar, v??nligen v??nta';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rader per sida';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Visa ' + pageFrom + ' till ' + pageTo + ' av ' + totalRows + ' rader';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'S??k';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Inga matchande resultat funna.';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Uppdatera';
      },
      formatToggle: function formatToggle() {
        return 'Skifta';
      },
      formatColumns: function formatColumns() {
        return 'kolumn';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sv-SE']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableThTH = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Thai translation
   * Author: Monchai S.<monchais@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['th-TH'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '?????????????????????????????????????????????, ??????????????????????????????????????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 ' + pageFrom + ' \u0E16\u0E36\u0E07 ' + pageTo + ' \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ' + totalRows + ' \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return '???????????????';
      },
      formatNoMatches: function formatNoMatches() {
        return '????????????????????????????????????????????????????????? !';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return '??????????????????';
      },
      formatToggle: function formatToggle() {
        return '??????????????????????????????';
      },
      formatColumns: function formatColumns() {
        return '?????????????????????';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['th-TH']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableTrTR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Turkish translation
   * Author: Emin ??en
   * Author: Sercan Cakir <srcnckr@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['tr-TR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Y??kleniyor, l??tfen bekleyin';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return 'Sayfa ba\u015F\u0131na ' + pageNumber + ' kay\u0131t.';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return totalRows + ' kay\u0131ttan ' + pageFrom + '-' + pageTo + ' aras\u0131 g\xF6steriliyor.';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Ara';
      },
      formatNoMatches: function formatNoMatches() {
        return 'E??le??en kay??t bulunamad??.';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Yenile';
      },
      formatToggle: function formatToggle() {
        return 'De??i??tir';
      },
      formatColumns: function formatColumns() {
        return 'S??tunlar';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'T??m Sat??rlar';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['tr-TR']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableUkUA = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Ukrainian translation
   * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['uk-UA'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '????????????????????????, ???????? ??????????, ??????????????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0437\u0430\u043F\u0438\u0441\u0456\u0432 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0437 ' + pageFrom + ' \u043F\u043E ' + pageTo + '. \u0412\u0441\u044C\u043E\u0433\u043E: ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return '??????????';
      },
      formatNoMatches: function formatNoMatches() {
        return '???? ???????????????? ?????????????? ????????????';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return '??????????????';
      },
      formatToggle: function formatToggle() {
        return '??????????????';
      },
      formatColumns: function formatColumns() {
        return '??????????????';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return '???????????????? ??????????????';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uk-UA']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableUrPK = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Urdu translation
   * Author: Malik <me@malikrizwan.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ur-PK'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '???????? ?????????????? ???????????? ??????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0631\u06CC\u06A9\u0627\u0631\u0688\u0632 \u0641\u06CC \u0635\u0641\u06C1 ';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u062F\u06CC\u06A9\u06BE\u06CC\u06BA ' + pageFrom + ' \u0633\u06D2 ' + pageTo + ' \u06A9\u06D2 ' + totalRows + '\u0631\u06CC\u06A9\u0627\u0631\u0688\u0632';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return '????????';
      },
      formatNoMatches: function formatNoMatches() {
        return '???????? ???????????? ???????? ??????';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return '???????? ????????';
      },
      formatToggle: function formatToggle() {
        return '?????????? ????????';
      },
      formatColumns: function formatColumns() {
        return '????????';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ur-PK']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableUzLatnUZ = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Uzbek translation
   * Author: Nabijon Masharipov <mnabijonz@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['uz-Latn-UZ'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Yuklanyapti, iltimos kuting';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' qator har sahifada';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Ko\'rsatypati ' + pageFrom + ' dan ' + pageTo + ' gacha ' + totalRows + ' qatorlarni';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Qidirish';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Hech narsa topilmadi';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Sahifalashni yashirish/ko\'rsatish';
      },
      formatRefresh: function formatRefresh() {
        return 'Yangilash';
      },
      formatToggle: function formatToggle() {
        return 'Ko\'rinish';
      },
      formatColumns: function formatColumns() {
        return 'Ustunlar';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Hammasi';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Eksport';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Filtrlarni tozalash';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uz-Latn-UZ']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableViVN = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Vietnamese translation
   * Author: Duc N. PHAM <pngduc@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['vi-VN'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '??ang t???i';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' b\u1EA3n ghi m\u1ED7i trang';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Hi\u1EC3n th\u1ECB t\u1EEB trang ' + pageFrom + ' \u0111\u1EBFn ' + pageTo + ' c\u1EE7a ' + totalRows + ' b\u1EA3ng ghi';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'T??m ki???m';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Kh??ng c?? d??? li???u';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Refresh';
      },
      formatToggle: function formatToggle() {
        return 'Toggle';
      },
      formatColumns: function formatColumns() {
        return 'Columns';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['vi-VN']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableZhCN = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Chinese translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['zh-CN'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '??????????????????????????????????????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return '\u6BCF\u9875\u663E\u793A ' + pageNumber + ' \u6761\u8BB0\u5F55';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u663E\u793A\u7B2C ' + pageFrom + ' \u5230\u7B2C ' + pageTo + ' \u6761\u8BB0\u5F55\uFF0C\u603B\u5171 ' + totalRows + ' \u6761\u8BB0\u5F55';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return '\u603B\u5171 ' + totalRows + ' \u6761\u8BB0\u5F55';
      },
      formatSearch: function formatSearch() {
        return '??????';
      },
      formatNoMatches: function formatNoMatches() {
        return '???????????????????????????';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return '??????/????????????';
      },
      formatRefresh: function formatRefresh() {
        return '??????';
      },
      formatToggle: function formatToggle() {
        return '??????';
      },
      formatColumns: function formatColumns() {
        return '???';
      },
      formatFullscreen: function formatFullscreen() {
        return '??????';
      },
      formatAllRows: function formatAllRows() {
        return '??????';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return '????????????';
      },
      formatExport: function formatExport() {
        return '????????????';
      },
      formatClearFilters: function formatClearFilters() {
        return '????????????';
      },
      formatJumpto: function formatJumpto() {
        return '??????';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return '????????????';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return '??????';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
  })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableZhTW = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Chinese translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['zh-TW'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '???????????????????????????????????????';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return '\u6BCF\u9801\u986F\u793A ' + pageNumber + ' \u9805\u8A18\u9304';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u986F\u793A\u7B2C ' + pageFrom + ' \u5230\u7B2C ' + pageTo + ' \u9805\u8A18\u9304\uFF0C\u7E3D\u5171 ' + totalRows + ' \u9805\u8A18\u9304';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return '\u7E3D\u5171 ' + totalRows + ' \u9805\u8A18\u9304';
      },
      formatSearch: function formatSearch() {
        return '??????';
      },
      formatNoMatches: function formatNoMatches() {
        return '???????????????????????????';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return '??????/????????????';
      },
      formatRefresh: function formatRefresh() {
        return '????????????';
      },
      formatToggle: function formatToggle() {
        return '??????';
      },
      formatColumns: function formatColumns() {
        return '???';
      },
      formatFullscreen: function formatFullscreen() {
        return '??????';
      },
      formatAllRows: function formatAllRows() {
        return '??????';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return '????????????';
      },
      formatExport: function formatExport() {
        return '????????????';
      },
      formatClearFilters: function formatClearFilters() {
        return '????????????';
      },
      formatJumpto: function formatJumpto() {
        return '??????';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return '????????????';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return '??????';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-TW']);
  })(jQuery);
});
