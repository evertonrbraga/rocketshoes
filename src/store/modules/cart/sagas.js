import { call, put, all, takeLatest } from "redux-saga/effects";

import api from "../../../services/api";

import { addToCartSuccess } from "./actions";

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`); //mesma coisa que api.get(`/products/${id}`)
  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest("@cart/ADD_REQUEST", addToCart)]);

//* é o async e yield é o await

//call chama métodos assíncronos que retornam promises

//put dispara uma action do redux

//all são listeners que ouvem quando as actions são disparadas

//takeLatest é um controle do saga que pega apenas a última vez que o usuário fez uma requisição na api
