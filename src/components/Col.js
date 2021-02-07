function Col(props) {
  return (
    <p onClick={props.onclick} className="text-md text-blue-500 border-r border-l w-{props.size}/12 flex-grow border-white p-4 flex items-center justify-center">
      {props.info || props.children}
    </p>
  );
}

export default Col;
