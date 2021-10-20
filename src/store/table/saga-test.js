import { takeLatest } from "redux-saga/effects";
import { runSaga } from "redux-saga";
import { getTableData, mySaga } from "./saga";

import { cleverAxios } from "../../utils/axios";
import { TYPES } from "../action-types";
import {
  getTableDataRequestSuccess,
  getTableDataRequestError,
} from "./action-creators";

describe("get Table data tests", () => {
  const generatorObj = mySaga();

  it("Должен отлавдивать GET_TABLE_DATA_REQUEST и вызывать getTableData", () => {
    expect(generatorObj.next().value).toEqual(
      takeLatest(TYPES.GET_TABLE_DATA_REQUEST, getTableData)
    );
  });

  it("Должен быть  done на след итерации", () => {
    expect(generatorObj.next().done).toBeTruthy();
  });
});

describe("makeAuthorsApiRequest", () => {
  it("Должен вызвать axios и dispatch successful action", async () => {
    const testData = [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
    ];

    const requestTableData = jest
      .spyOn(cleverAxios, "get")
      .mockImplementation(() => Promise.resolve(testData));

    const dispatched = [];

    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getTableData
    );

    expect(requestTableData).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([getTableDataRequestSuccess(testData)]);
    requestTableData.mockClear();
  });

  it("Должен вызвать axios и сделать dispatch error", async () => {
    const requestAuthors = jest
      .spyOn(cleverAxios, "get")
      .mockImplementation(() => Promise.reject());
    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getTableData
    );

    expect(requestAuthors).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([getTableDataRequestError(result)]);
    requestAuthors.mockClear();
  });
});
