import React from 'react';
import logo  from "./logo.svg";
import "./App.css";

// function App(){
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" />
//                 <p>Learn react with hitesh crsh course  </p>

//             </header>
//             <p>Learn react with hitesh crsh course  </p>
//         </div>
//     );
// }


// export default App;

class App extends React.Component {

constructor(props){
    super(props);
    this.state = {
        newItem: "",
        list : []
    }
}


addItem(todovalue){
    if (todovalue !==""){
        const newItem = {
            id: Date.now(),
            value: todovalue,
            isDone: false
        };
        const list = [...this.state.list];
        list.push(newItem);
        this.setState({
            list,
            newItem: ""
        });
    }
}

deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({list: updatedlist})
}

updateInput(input){
    this.setState({newItem:input});
}



    render() {
        return(
            <div>
                <img src={logo} width="100" height="100" className="logo"/>
                <h1 className="app-title">LCO ToDo App </h1>
                <div className="container">
                    add an item .......
                    <br/>
                    <br/>
                    <input
                    type="text"
                    className="input-text"
                    placeholder="Write a TO DO"
                    required
                    value={this.state.newItem}
                    onChange={e => this.updateInput(e. target.value)}
                    />
                    <br/>
                    <br/>
                    <button
                     className="add-btn"
                     onClick={() => this.addItem(this.state.newItem)}
                     disabled={!this.state.newItem.length}
                     >Add TODO</button>
                    <div className="list">
                        <ul>
                            {this.state.list.map(item => {
                                return(
                                    <li key={item.id}>
                                        <input
                                        type="checkbox"
                                        name="isDone"
                                        checked={item.isDone}
                                        onChange={() => {}}
                                        />
                                        {item.value}
                                        <button
                                        className="btn"
                                        onClick={() => this.deleteItem(item.id)}
                                        >Delete</button>
                                    </li>
                                );
                            })}
                            <li>
                                <input type="checkbox" name=""></input>
                                Record youtube videos
                                <button className="btn">Delete</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } 
}

export default App;