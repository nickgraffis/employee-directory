function Img(props) {
  return <div className="p-4 flex items-center justify-center border-r border-l border-white w-{props.size}/12">
  <img className="h-12 w-12 rounded-full object-cover" src={props.img} />
  </div>
}

export default Img;
