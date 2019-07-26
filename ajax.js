function getFile() {
    if(changeValue==0){
        return false;
    }
    var dataUrl = $("#upImg").attr("src");
    $.post("getFile.php",
    {
        imgSrc: dataUrl
    },
        function(data,status){
    });
}
