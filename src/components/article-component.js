import React from 'react';
function Article(){
	
const body = <section>body</section>;
	return (
		<div>
			<h2>title</h2>
				<span>{body}</span>
				<span>{(new Date()).toDateString()}</span>				
		</div>
	);
}

export default Article;