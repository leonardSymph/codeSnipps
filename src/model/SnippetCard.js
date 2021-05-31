class SnippetCard {
  constructor(user, id, language, title, code, name) {
    this.card = {
      user: user,
      snippet: {
        id: id,
        language: language,
        title: title,
        code: code,
        name: name,
      },
    };
  }
}

export default SnippetCard;
