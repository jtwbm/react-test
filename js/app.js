var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<h1>Список новостей</h1>
				<News />
				<Comments />
				<Footer />
			</div>
		);
	}
});

var News = React.createClass({
	render: function() {
		return (
			<div className="news">
				К сожалению, новостей пока нет...
			</div>
		);
	}
});

var Comments = React.createClass({
	render: function() {
		return (
			<div className="comments">
				Новостей нет, комментировать нечего
			</div>
		);
	}
});

var Footer = React.createClass({
	render: function() {
		return (
			<footer>
				<p>design by Mizan</p>
			</footer>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById("root")
);