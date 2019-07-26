var changeValue=0;
$(document).ready(function(){
  $('#upImg').click(function(){
      $("input[type='file']").click();
  });
});
function previewImage(file){
    changeValue=1;
    if (file.files && file.files[0]){
        var img = document.getElementById('upImg');
        var reader = new FileReader();
        reader.onload = function(evt){
            img.src = evt.target.result;
        }
        reader.readAsDataURL(file.files[0]);
    }
}
