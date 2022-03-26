// export const myMutation = (state) => {

// }

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
}

export const updateEntry = (state, entry) => {
  const updatedEntries = state.entries.map(e => {
    return e.id === entry.id ? {...e, ...entry} : {...e};
  })

  state.entries = updatedEntries;
}

export const addEntry = (state, entry) => {
  state.entries = [entry, ...state.entries];
}

export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter(e => e.id !== id);
}
