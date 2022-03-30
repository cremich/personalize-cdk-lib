export default {
  StartAt: "pass-state",
  States: {
    "pass-state": {
      Type: "Pass",
      End: true,
    },
  },
};
