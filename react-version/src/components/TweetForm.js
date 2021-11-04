function TweetForm(){
  const tweetQuestion = 'What are you humming about?';
  const maxCharacters = 140;

  const noEvent = event => {
    event.preventDefault();
    console.log('Event not triggered');
  }

  return (
    <section className="newtweet">
      <form method="post" onSubmit={noEvent} action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={tweetQuestion}></textarea>
          <input type="submit" value="Tweet" className="form__input" />
          <span className="form__counter">{maxCharacters}</span>
      </form>
    </section>
  );
}

export default TweetForm;