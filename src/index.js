import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";
import faker from "faker";



const App = () => {
	return (
		<div className="ui container comments">
			<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={faker.image.avatar()} />
				</a>

				<div className="content">
					<a href="/" className="author">
						De-Prof
					</a>
					<div className="metadata">
						<span className="date">Today 6:00pm</span>
					</div>
					<div className="text">
						Nice Blog Post
					</div>
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(
	<App />, document.querySelector("#root")
);