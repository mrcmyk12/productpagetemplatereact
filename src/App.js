import React from "react";
import "./App.css";

class App extends React.Component {
	state = {
		products: [
			{
				_id: "1",
				title: "ADIDAS 4D FWD SHOES",
				src: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/283d7399edea45dcace7ad86013f0a33_9366/adidas_4D_FWD_Shoes_Black_GX2977_01_standard.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe123f747ca042b4b58cad8d00fd817c_9366/adidas_4D_FWD_Shoes_Orange_GX2978_01_standard.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/604fcb9388c54fbb8730ad67007acf0f_9366/adidas_4D_FWD_Shoes_Orange_GZ8619_01_standard.jpg",
				],
				description: "UI/UX designing, html css tutorials",
				content:
					"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
				price: 23,
				colors: ["black", "orange", "red"],
				count: 1
			}
		],
    index: 0
	};

  myRef = React.createRef();

  handleTab = index => {
    this.setState({ index: index})
    const images = this.myRef.current.children;
    for(let i = 0; i < images.length; i++){
      images[i].className = images[i].className.replace("active", "")
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active"
  }



	render() {
		const { products, index } = this.state;
		console.log(products);
		return (
			<div className="app">
				{products.map((item) => (
					<div className="details" key={item._id}>
						<div className="big-img">
							<img src={item.src[index]} alt="" />
						</div>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <div className="colors">
                {
                  item.colors.map((color,index )=> (
                    <button style={{background: color}} key={index}></button>
                  ))
                }
              </div>
              <p>{item.description}</p>
              <p>{item.content}</p>

              <div className="thumb" ref={this.myRef}>
                  {
                    item.src.map((img,index) => (
                      <img src={img} alt="" key={index} 
                      onClick={() => this.handleTab(index)}/>
                    ))
                  }
              </div>
              <button>Add To Cart</button>
            </div>
					</div>
				))}
			</div>
		);
	}
}

export default App;
