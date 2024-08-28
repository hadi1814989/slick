import { useEffect, useState } from 'react'
import './App.css'
import Slider from "react-slick";
import axios from 'axios';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import { IoIosArrowForward ,IoIosArrowBack } from "react-icons/io";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='next'>
    <IoIosArrowForward />
     </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='prev'>
      <IoIosArrowBack />
      </div>
  );
}

function App() {
  var settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const settings2 = {
    // dots: true,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    arrows : false,
    speed: 2000,
    autoplaySpeed: 2000,
     cssEase: "linear"
  };


  // const settings3 = {
  //   dots: true,
  //   infinite: true,
  //   autoplaySpeed:1500,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   arrows: false,
  //   initialSlide:0,
  //   fade: true,
  //   rtl: true
  // };


  let [product , setProduct] = useState([])

  let getData = ()=>{
    axios.get("https://dummyjson.com/products").then((response)=>{
      setProduct(response.data.products);
      
    })
  }

  useEffect(()=>{
    getData()
    
  },[])

  return (
    <>
      
       <Container>
     <Slider {...settings}>
     {product.map((item, i)=>(
       <div key={i} id='product'>
            <span>{item.id}</span>
            <img src={item.thumbnail} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <h3 className='color'>${item.price}</h3>
          <span>Reating : &nbsp;{item.rating}</span>
          </div>
    ))}
     </Slider>

     {/* slider 2 */}

      <Slider {...settings2}>
      {product.map((item,i )=>(
        <div key={i} id='product' className='setting2'>
            <p>{item.id}</p>
            <img src={item.thumbnail} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h3 className='color'>${item.price}</h3>
          <p>Reating : &nbsp;{item.rating}</p>
          </div>
    ))}
      </Slider>
     
     

      {/* slider 3 */}
      {/* <Slider {...settings3}>
     {product.map((item , i)=>(
       <div key={i} id='product'>
            <span>{item.id}</span>
            <img src={"item.http://cdn.dummyjson.com/thumbnail"} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h3 className='color'>${item.price}</h3>
          <span>Reating : &nbsp;{item.rating}</span>
          </div>
    ))}
      </Slider> */}
     </Container>
     
    </>
  )
}

export default App
