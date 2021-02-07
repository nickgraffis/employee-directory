function Col(props) {
  return (
    <p onClick={props.onclick} className={`${props.sortable ? 'cursor-pointer' : ''} text-${props.fontSize || 'sm'} text-blue-500 border-r border-l w-${props.size}/12 flex-grow border-white p-1 flex items-center justify-center`}>
      {props.info || props.children}
    </p>
  );
}

export default Col;
