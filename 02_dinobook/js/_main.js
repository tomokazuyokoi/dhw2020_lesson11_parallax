$(function(){
    // 1. headerタグの高さ取得(変数headerHeight)
    var headerHeight = $('header').height();
    console.log('ヘッダーの高さ：' + headerHeight);

    // 2. スクロールイベント時
    $(window).on('scroll', function(){
        // 3. スクロール値を変数dyに保存
        var dy = $(this).scrollTop();
        console.log(dy);

        // 4. スクロール値よりheaderHeightの半分が大きい時（if文）
        if( dy < headerHeight/2 )
        {
            // 5. header部分の動き(dyに任意の係数を掛け算)
            $('.putera').css('transform', 'translateY(' + dy * 0.4 + 'px)');
            $('.childDino').css('transform', 'translateY(' + dy * -0.2 + 'px)');
            $('.momDino').css('transform', 'translateY(' + dy * -0.3 + 'px)');
        }
        // 6. それ以外の時（else文）（スクロール値がheaderHeightの半分を超えた時）
        else
        {
            // 7. play部分の動き(dyに任意の係数を掛け算)
            $('.stego').css('transform', 'translateX(' + dy * 0.4 + 'px)');
            $('.tirano').css('transform', 'translateX(' + dy * -0.4 + 'px)')
        }
    });
});