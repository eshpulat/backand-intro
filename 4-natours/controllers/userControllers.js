const User = require('../moduls/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    result: users.length,
    data: { users },
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This rout is not yet defined1',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This rout is not yet defined1',
  });
};

exports.UpdateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This rout is not yet defined1',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This rout is not yet defined1',
  });
};
