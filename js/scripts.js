$(document).ready(function() {
  $("form#questions").submit(function(event){
    event.preventDefault();
  
    let luckyArray = [];
    let unLuckyArray = [];
    $("input:checkbox[name=lucky]:checked").each(function(){
      const luckyAnswers = $(this).val();
      luckyArray.push(luckyAnswers);
    });

    $("input:checkbox[name=un-lucky]:checked").each(function(){
      const unLuckyAnswers = $(this).val();
      unLuckyArray.push(unLuckyAnswers);
    });
    
    if (luckyArray.length > unLuckyArray.length) {
      $("#goodfortune").show();
      $("#badfortune").hide();
      $("#neutral").hide();
    }
    else if (luckyArray.length < unLuckyArray.length) {
      $("#badfortune").show();
      $("#goodfortune").hide();
      $("#neutral").hide();
    }
    else if (luckyArray.length = unLuckyArray.length) {
      $("#neutral").show();
      $("#goodfortune").hide();
      $("#badfortune").hide();
    }
  });
});