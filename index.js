var render=function(data){
  var pageurl="https://en.wikipedia.org/?curid=";
  for(var i in data){
    $('#res').append("<div class='col-sm-12' id='resultdiv'><a target='_blank' href='"+pageurl+data[i].pageid+"'><h3>"+data[i].title+"</h3><p>"+data[i].extract+"</p></a></div>");
  }
};
var call=function(){
  var q=$('#query').prop('value');
  var url="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+q+"&callback=?";
    $.ajax({
      url:url,
      type: 'POST', dataType: 'jsonp',
      success:function(result){
        var data=result.query.pages;
        render(data);
      }
    });
}; 
$(document).ready(function(){
  $('.form').submit(function(){
    $('#res').html(" ");
    call();
    return false;
  });  
  $('#search').click(function(){
    $('#res').html(" ");
    call();
  });
}); 