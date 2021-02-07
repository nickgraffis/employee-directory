# React based employee directory

 Check out the project [here](https://nickgraffis.github.io/reat-directory).

 ## What to expect
 This project showcases a component called Table, that has loosely coupled components (Rows and Cols).

 ### Row
 A row is simply
 ```
 <div className="flex w-full border border-white">{props.children}</div>;
 ```

 ### Col
 A col is simply
 ```
 <p onClick={props.onclick} className={`${props.sortable ? 'cursor-pointer' : ''} text-${props.fontSize || 'sm'} text-blue-500 border-r border-l w-${props.size}/12 flex-grow border-white p-1 flex items-center justify-center`}>
   {props.info || props.children}
 </p>
 ```

 ### Img
 An img is simply a special col that creates a picture
 ```
 <div className={`p-4 flex items-center justify-center border-r border-l border-white w-${props.size}/12`}>
   <img className="h-12 w-12 rounded-full object-cover" src={props.img} />
 </div>
 ```
 This allows the Table component to create many dynamic rows with dynamic columns.

 ```
 {this.state.results.length > 0 ?
   this.state.results.map((result) => {
     return <Row>
       <Img size="1" img={result.picture.thumbnail} />
       <Col size="3" info={`${result.name.first} ${result.name.last}`} />
       <Col size="4" info={result.email} />
       <Col size="2" info={result.phone} />
       <Col size="2" info={result.gender} />
     </Row>
   })
   : <p className="text-red-400">nothing...</p>
 }
 ```

 ### Special Features
 The Table component also creates a special header row that has access to some functions defined within the Table component to allow for sorting and filtering.

 ```
 <Row>
   <Col fontSize="md" size="1" info="Avatar"/>
   <Col fontSize="md" size="3" sortable="true" onclick={() => this.handleOrderBy('name')}>
     {`Name ${this.state.orderDirection['name'] ? '↑' : '↓'}`}
   </Col>
   <Col fontSize="md" size="4" sortable="true" onclick={() =>  this.handleOrderBy('email')}>
     {`Email ${this.state.orderDirection['email'] ? '↑' : '↓'}`}
   </Col>
   <Col fontSize="md" size="2" info="Phone"/>
   <Col fontSize="md" size="2" sortable="true" info={`Gender ${this.state.filter ? `${this.state.filter}` : '--'}`} onclick={this.handleFilterBy}/>
 </Row>
 ```

 You can filter by Gender. And sort employees by last name or email. 
