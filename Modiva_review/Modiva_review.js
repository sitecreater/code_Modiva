    function filtercheak() {
        var select_obj = [];
        // 필터 내용 초기화
        $("#filterlog").empty();
        $('input[type="checkbox"]:checked').each(function (index) {
            if (index != 0) {
             select_obj += ',';
            }
            $("#filterlog").prepend("<div class='filter-check'><span>"+$(this).val()+"</span><div class='check-remove'><i class='fas fa-times'></i></div></div>");
            select_obj += $(this).val();
        });
        // 체크한 필터 위에 항목 div 생성
        // $("#filterlog").prepend("<div class='filter-check'><span>"+select_obj+"</span><div class='check-remove'><i class='fas fa-times'></i></div></div>");

    }
