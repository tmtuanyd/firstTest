export const SUCCESS = {
  type: "SUCCESS",
};

export const FAILURE = {
  type: "FAILURE",
};

export const success_creator = (data) => ({
  type: "SUCCESS_CREATOR",
  payload: data,
});

export const failure_creator = () => ({ type: "FAILURE_CREATOR" });
