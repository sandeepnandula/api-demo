import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPutModel: false,
      showDeleteModel: false,
      showPostModell: false,
      userName: '',
      email: '',
      platform: '',
      fav_food: '',
      message: '',
      users: '',
      userList: [],
    };
    this.onClickPost = this.onClickPost.bind(this);
    this.onClickGet = this.onClickGet.bind(this);
    this.onClickPut = this.onClickPut.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }
  onClickPut() {
    const email =  this.state.email;
    const fav_food = this.state.fav_food;
    fetch('/updateUser', { method: 'PUT', body: JSON.stringify({ email, fav_food })})
    .then(response => response.json())
    .then((data) => {
      if (data.status === 'success') {
        this.setState({ message: data.msg });
      } else if (data.status === 'error') {
        this.setState({ message: data.msg });
      }
    });
  }
  onClickDelete() {
    const email = this.state.email;
    fetch('/deleteUser/'+ email, { method: 'DELETE' })
    .then(response => response.json())
    .then((data) => {
      if (data.status === 'success') {
        this.setState({ message: data.msg });
      } else if (data.status === 'error') {
        this.setState({ message: data.msg });
      }
    });
  }
  onClickPost() {
    const userName =  this.state.userName;
    const email = this.state.email;
    const platform = this.state.platform;
    const fav_food = this.state.fav_food;
    console.log(userName, email, platform, fav_food);
    fetch('/registerUser', { method: 'POST', body: JSON.stringify({ userName, email, platform, fav_food }), credentials: 'same-origin' })
    .then(response => response.json())
    .then((data) => {
      if (data.status === 'success') {
        this.setState({ message: data.msg });
      } else if (data.status === 'error') {
        this.setState({ message: data.msg });
      }
    });
  }
  onClickGet() {
    fetch('/getAllUsers', {method: 'GET'})
    .then(response => response.json())
    .then((data) => {
      if (data.status === 'success') {
        this.setState({ users: data.msg });
      } else if (data.status === 'error') {
        this.setState({ users: data.msg });
      }
    });
  }
  render() {
    if(this.state.users){
      this.state.userList = this.state.users.map(function(details){
        return <li>
          <h4><span>{details.user_name}</span><span>{details.email}</span><span>{details.fav_food}</span></h4>
        </li>
      });
    }
    return (
      <div>
        <div className="clear navigation">
          {/* <h1>Welcome to the Session everyone</h1> */}
          <ul className="features">
            <li><a>Welcome to the Session everyone...</a></li>
          </ul>
          <ul className="logsign">
            <li><button type="button" onClick={() => this.setState({ showPutModel: true })} >PUT</button></li>
            <li><button type="button" onClick={() => this.setState({ showDeleteModel: true })}>DELETE</button></li>
          </ul>
        </div>
        <div className="herosection">
        	<div className="herocontent" id="herocontent">
        		<h1>Welcome to the Session everyone...</h1>
        		<p>Hi! this is Sandeep, let's learn together something new today.</p>
        		<button className="button" onClick={this.onClickGet}>GET</button>
        		<button className="button" onClick={() => this.setState({ showPostModel: true })}>POST</button>
        	</div>
          <div style={{ margin: '0 15%', maxHeight: '50%', overflow: 'scroll'}}>
            <ul >
              <li><h2><span>UserName</span><span>Email</span><span>Fav_Food</span></h2></li>
              {this.state.userList}
            </ul>
          </div>
        </div>
        {/* put modal */}
        <div className="loginmodal" style={{ display: this.state.showPutModel ? 'block' : 'none' }}>
        	<div className="loginform">
        		<span>
        			<i className="fa fa-remove fa-lg closeform"></i>
        		</span>
        			<label className="formhead">PUT OR UPDATE</label><br/>
              <span style={{ color: 'red' }}>{this.state.message ? this.state.message : ''}</span><br/>
        			 Email : <input type="text" className="Username" placeholder="Enter Email"  onChange={e => this.setState({ email: e.target.value })}/><br/>
               Fav_food : <input type="text" className="Username" placeholder="fav_food"  onChange={e => this.setState({ fav_food: e.target.value })}/><br/>
        			<button className="button" onClick={this.onClickPut}>PUT</button>
              <button className="button" onClick={() => this.setState({ showPutModel: false })}>close</button>
        	</div>
        </div>
        {/* post modal */}
        <div className="signupmodal" style={{ display: this.state.showPostModel ? 'block' : 'none' }}>
        	<div className="signupform">
        		<span>
        			<i className="fa fa-remove fa-lg closeform"></i>
        		</span>
        			<label className="formhead">POST FORM</label><br/>
              <span style={{ color: 'red' }}>{this.state.message ? this.state.message : ''}</span><br/>
        			User Name : <input type="text" className="Username" placeholder="Enter user name" onChange={e => this.setState({ userName: e.target.value })}/><br/>
        			Email ID &nbsp;&nbsp;: <input type="email" className="Mailid" placeholder="Enter your mailid" onChange={e => this.setState({ email: e.target.value })}/><br/>
              Platform : <input type="text" className="Username" placeholder="Enter your Platform " onChange={e => this.setState({ platform: e.target.value })}/><br/>
              fav_food : <input type="text" className="Username" placeholder="Enter your fav_food" onChange={e => this.setState({ fav_food: e.target.value })}/><br/>
        			<button className="modalbutton" onClick={this.onClickPost}>POST</button>
              <button className="modalbutton"  onClick={() => this.setState({ showPostModel: false })}>CANCEL</button>
        	</div>
        </div>
        {/* DELETE model  */}
        <div className="loginmodal" style={{ display: this.state.showDeleteModel ? 'block' : 'none' }}>
        	<div className="loginform">
        		<span>
        			<i className="fa fa-remove fa-lg closeform"></i>
        		</span>
        			<label className="formhead">DELETE</label><br/>
              <span style={{ color: 'red' }}>{this.state.message ? this.state.message : ''}</span><br/>
        			 Email : <input type="text" className="Username" placeholder="Enter Email" onChange={e => this.setState({ email: e.target.value })}/><br/>
               <button className="button" onClick={this.onClickDelete}>DELETE</button>
              <button className="button" onClick={() => this.setState({ showDeleteModel: false })}>close</button>
        	</div>
        </div>
      </div>
    );
  }
}

export default App;
