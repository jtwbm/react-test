var my_news = [
		{
			author: 'Васян',
			text: 'В четверг, четвертого числа...'
		},
		{
			author: 'Просто Вася',
			text: '@@@@'
		},
		{
			author: 'еще кто то',
			text: '235o6723465'
		}
	];

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<h1>Список новостей</h1>
				<News data={my_news} />
				<Comments />
			</div>
		);
	}
});

var News = React.createClass({
	render: function() {
		var data = this.props.data;
		var newsTemplate = data.map(function(item, index) {
			return (
				<div className='newsItem' key={index}>
					<p className='news_author'>{item.author}:</p>
					<p className='news_text'>{item.text}:</p>
				</div>
			)
		})

		return (
			<div className="news">
				{newsTemplate}
				<strong>Всего новостей: {data.length}</strong>
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
ReactDOM.render(
	<Footer />,
	document.getElementById("footer")
);
