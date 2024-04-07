setTimeout(() => {
    $(".jedan").css({"position":"relative","top":"-100%"});
    $(".pet").css({"position":"relative","top":"-100%"});

    setTimeout(() => {
        $(".dva").css({"position":"relative","top":"-100%"});

        setTimeout(() => {
            $(".tri").css({"position":"relative","top":"-100%"});

            setTimeout(() => {
                $(".cetri").css({"position":"relative","top":"-100%"});

            }, 200);
        }, 200);
    }, 200);
}, 4000);