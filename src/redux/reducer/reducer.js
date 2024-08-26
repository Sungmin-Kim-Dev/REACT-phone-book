const initialState = {
  contactList: [],
  keyword: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CONTACT":
      if (payload.name || payload.phoneNumber !== 0) {
        return {
          ...state,
          contactList: [
            ...state.contactList,
            { name: payload.name, phoneNumber: payload.phoneNumber },
          ],
        };
      }
      return { ...state };
    case "DELETE_CONTACT":
      return {
        ...state,
        contactList: state.contactList.filter(
          (item) => item.name !== payload.name,
        ),
      };
    case "EDIT_CONTACT":
      return state;

    case "SHOW_ALL":
      return { ...state, keyword: "" };

    case "SEARCH_BY_NAME":
      console.log(payload.keyword);
      return { ...state, keyword: payload.keyword };

    default:
      return state;
  }
};

export default reducer;
