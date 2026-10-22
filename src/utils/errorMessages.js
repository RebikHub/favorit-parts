export const errorMessages = (message) => {
    switch (message) {
      case "Empty key!":
        return 'Не указан ключ покупателя!'
      case "Invalid key client!":
        return 'Неверный ключ покупателя, покупатель не найден!'
      case "Empty number goods!":
        return 'Не указан номер детали!'
      case "Request quota exceeded!":
        return 'Вы превысили лимит запросов по грузовому ассортименту (у нас для каждого клиента есть ограничения на поиск грузовых запчастей)!'
      case "Product not found in the database!":
        return 'Товар не найден в базе!'
      default:
        return 'Что то пошло не так, попробуйте еще раз!'
    }
}
