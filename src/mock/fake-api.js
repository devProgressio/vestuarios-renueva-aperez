const productos = [
    {id:'01', category: 'mujer', name:'random1', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",  price:75, img:'https://picsum.photos/200',hashtags:['#compraya', '#ultimoprod', '#random'], stock:5, },
    {id:'02', category: 'mujer', name:'random2', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price:70, img:'https://picsum.photos/201',hashtags:['#compraya', '#ultimoprod', '#random'],stock:15},
    {id:'03', category: 'mujer', name:'random3', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price:100, img:'https://picsum.photos/202',hashtags:['#compraya', '#ultimoprod', '#random'],stock:7},
    {id:'04', category: 'mujer', name:'random4', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price:75, img:'https://picsum.photos/203',hashtags:['#compraya', '#ultimoprod', '#random'],stock:3},
    {id:'05', category: 'hombre', name:'random5', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price:90, img:'https://picsum.photos/204',hashtags:['#compraya', '#ultimoprod', '#random'],stock:10},
    {id:'06', category: 'hombre', name:'random6', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price:50, img:'https://picsum.photos/205',hashtags:['#compraya', '#ultimoprod', '#random'],stock:4},
    {id:'07', category: 'hombre', name:'random7', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price:50, img:'/img/michi.png',hashtags:['#compraya', '#ultimoprod', '#random'],stock:4},
    {id:'08', category: 'hombre', name:'random8', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price:50, img:'https://i.postimg.cc/qvwMmrH0/6mhmii.jpg',hashtags:['#compraya', '#ultimoprod', '#random'],stock:4},
    {id:'09', category: 'hombre', name:'random9', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price:50, img:require('../assets/img/logo1.png'),hashtags:['#compraya', '#ultimoprod', '#random'],stock:4},
  ];

  export const getProducts = new Promise((resolve, reject) => {
    //acciones
    let condition = true;
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('salio mal :( no hay sushi')
      }
    },2000)

  });

/*   export const getOneProduct = new Promise((resolve) => {
    setTimeout(() => {
      resolve(oneProduct);
    }, 2000);
  }); */