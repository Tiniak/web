let data = [

    {
  
    photo: './images/Maple_tree.jpg',
  
    title: 'Maple_tree',
  
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed gravida mauris. Sed vulputate nisi quis ex sollicitudin, in ultrices risus condimentum. Etiam quis nisl sed dui dictum tempus. Aliquam sodales pulvinar elit, in cursus tortor pharetra eget.'
  
  },
  
  {
  
    photo: './images/Autumn.jpg',
  
    title: 'Autumn',
  
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed gravida mauris. Sed vulputate nisi quis ex sollicitudin, in ultrices risus condimentum. Etiam quis nisl sed dui dictum tempus. Aliquam sodales pulvinar elit, in cursus tortor pharetra eget.'
  
  },
  
  {
  
    photo: './images/Banyan_tree.jpg',
  
    title: 'Banyan_tree',
  
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed gravida mauris. Sed vulputate nisi quis ex sollicitudin, in ultrices risus condimentum. Etiam quis nisl sed dui dictum tempus. Aliquam sodales pulvinar elit, in cursus tortor pharetra eget.'
  
  },
  
  {
  
    photo: './images/Jaracanda_tree.jpg',
  
    title: 'Jaracanda_tree',
  
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed gravida mauris. Sed vulputate nisi quis ex sollicitudin, in ultrices risus condimentum. Etiam quis nisl sed dui dictum tempus. Aliquam sodales pulvinar elit, in cursus tortor pharetra eget.'
  
  },
  
  {
  
    photo: './images/Leaves.jpg',
  
    title: 'Leaves',
  
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed gravida mauris. Sed vulputate nisi quis ex sollicitudin, in ultrices risus condimentum. Etiam quis nisl sed dui dictum tempus. Aliquam sodales pulvinar elit, in cursus tortor pharetra eget.'
  
  },
  
  {
  
    photo: './images/Oak_tree.jpg',
  
    title: 'Oak_tree',
  
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed gravida mauris. Sed vulputate nisi quis ex sollicitudin, in ultrices risus condimentum. Etiam quis nisl sed dui dictum tempus. Aliquam sodales pulvinar elit, in cursus tortor pharetra eget.'
  
  },
  
  {
  
    photo: './images/Peepal_tree.jpg',
  
    title: 'Peepal_tree',
  
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed gravida mauris. Sed vulputate nisi quis ex sollicitudin, in ultrices risus condimentum. Etiam quis nisl sed dui dictum tempus. Aliquam sodales pulvinar elit, in cursus tortor pharetra eget.'
  
  }
  
  ];
  
  
  
  
  
  let lvphoto = 0;
  
  let arraysize = 0;
  
  arraysize = (data.length) - 1;
  
  
  
  
  
  //load prvej fotky
  
  $('#photo').attr('src', data[0].photo);
  
  $('#photo-title').text( data[0].title);
  
  $('#photo-description').text(data[0].description);
  
  //
  
  
  
  //pravy button
  
  $('.right').click(() => {
  
    if (lvphoto === arraysize ){
  
      lvphoto = 0;
  
      loadPhoto(lvphoto);
  
    }
  
    else
  
    {
  
    lvphoto++;
  
    loadPhoto(lvphoto);
  
  };
  
  })
  
  //
  
  //lavy button
  
  $('.left').click(() => {
  
    if (lvphoto === 0)
  
    {
  
      lvphoto = arraysize;
  
      loadPhoto(lvphoto);
  
    }
  
    else
  
    {
  
    lvphoto--;
  
    loadPhoto(lvphoto);
  
  };
  
  })
  
  //
  
  
  
  //nacitanie fotiek po kliknuti
  
  let loadPhoto = (cislobrazka) =>{
  
    $('#photo').attr('src', data[cislobrazka].photo);
  
  $('#photo-title').text( data[cislobrazka].title);
  
  $('#photo-description').text( data[cislobrazka].description);
  
  }
  
  
  
  // Tvorba thumbnailov
  
  data.forEach(element =>{
  
      let lvindex = 0;
  
      lvindex = $(data).index(element);
  
      $(".thumbnail").append('<div class="td'+lvindex+'"><img src="' + element.photo + '"id="'+lvindex+'" class=thimg><div class=th'+lvindex+'>"'+element.title+'"</div></div>');
  
  
  
  }  );
  
  //
  
  
  
  
  
  //  Kliknutie na thumbnail
  
  $('.thumbnail').click((event) => {
  
    loadPhoto($(event.target).attr('id'));
  
  
  
  })
  
  //