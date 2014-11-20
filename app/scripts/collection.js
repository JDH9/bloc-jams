
var buildAlbumThumbnail = function (){
  var template =
       '<div class="collection-album-container col-md-2">'
     + '  <img src="/images/album-placeholder.png"/>'
     + '  <div class="caption album-collection-info">'
     + '    <p>'
     + '      <a class="album-name" href="/album.html"> Album Name </a>'
     + '      <br/>'
     + '      <a href="/album.html"> Artist name </a>'
     + '      <br/>'
     + '      X songs'
     + '      <br/>'
     + '      X:XX Total Length'
     + '      <br/>'
     + '    </p>'
     + '  </div>'
     + '</div>';

    return $(template);
}


var updateCollectionView = function(){
  var $collection = $('.collection-container .row');
    $collection.empty();

    for (var i = 0; i < Math.floor((Math.random() * 100) + 25); i++){
      var $newThumbnail = buildAlbumThumbnail();
      $collection.append($newThumbnail);
    }
}

if(document.URL.match(/\/collection.html/)){
  // wiat until the html if fully processed
  $(document).ready(function(){

    updateCollectionView();
  });
}