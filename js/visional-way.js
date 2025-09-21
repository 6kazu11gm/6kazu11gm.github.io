(function ($) {
    var modalSet = function () {


        var modalLength = $('.ux_gallery_inline_img .basic-list2 .item > a').length;
        if (modalLength > 0) {

            $('body').append('<div class="lx_modal_win" style="display:none"></div>');

            var setHtml = [];
            $('.ux_gallery_inline_img .basic-list2 .item > a').each(function (index) {
                var $this = $(this);
                var idSet = 'modalitem' + index;

                setHtml[index] = '<div class="lx_modai-win" id="' + idSet + '">'
                    + '<div class="modal-left">'
                    + '<p class="news_tx">' + $this.find('.news_tx').html() + '</p>';
                if ($this.closest('.item').find('.explanation').length > 0) {
                    setHtml[index] = setHtml[index] + '<ul class="explanation">' + $this.closest('.item').find('.explanation').html() + '</ul>';
                }

                setHtml[index] = setHtml[index] + '</div>'
                    + '<div class="modal-right">';
                if ($this.closest('.item').find('.det_tx').length > 0) {
                    setHtml[index] = setHtml[index] + '<p class="det_tx">' + $this.closest('.item').find('.det_tx').html() + '</p>';
                }
                setHtml[index] = setHtml[index] + '</div>';

                setHtml[index] = setHtml[index] + '</div>';

                $('.lx_modal_win').append(setHtml[index]);

                $(this).attr('href', '#' + idSet);
                $(this).addClass('group-executives');
            });
        }

        $('.group-executives').colorbox({
            inline: true,
            rel: 'group-executives',
            maxWidth: "100%",
            maxHeight: "100%",
            onComplete: function () {
                $('#cboxWrapper').addClass('ready');
            },
            onLoad: function () {
                $('#cboxWrapper').removeClass('ready');
            },
            onCleanup: function () {
                $('#cboxWrapper').removeClass('ready');
            }
        });

    }

    $(window).on('load', function () {
        modalSet();
    });
})(jQuery);
