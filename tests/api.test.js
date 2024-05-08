// Тесты для сайта BookStore

import {
  createBook,
  changeBook,
  getBook,
  deleteBook,
  generateToken,
} from '../framework/services.mjs'

describe('API тесты с контроллерами и паттернами для BookStore', () => {
  let token
  beforeAll(async () => {
    token = await generateToken()
  })
  describe('API тесты для post запроса', () => {
    it('Создание книги и получение статуса и данных', async () => {
      const response = await createBook(token)
      expect(response.status).toBe(201)
      expect(response.data).toBeDefined()
    })

    describe('API тесты для put запроса', () => {
      it('Изменение книги и получение статуса и данных', async () => {
        const response = await changeBook(token)
        expect(response.status).toBe(200)
        expect(response.data).toBeDefined()
      })
    })

    describe('параметризованный тест для получения информации о книге', () => {
      const isbnList = ['9781449331818', '9781449365035', '9781491950296']
      test.each(isbnList)('книгу получается найти', async isbn => {
        const response = await getBook(isbn)
        expect(response.status).toBe(200)
        expect(response.data).toBeDefined()
      })
    })
  })

  describe('тесты на delete запроса', () => {
    it('Всё удаляется', async () => {
      const response = await deleteBook(token)
      expect(response.status).toBe(200)
    })
  })
})
