exports.createUser = function (req, res) {
    res.send('유저가 생성되었습니다.');
}

exports.readUser = function (req, res) {
    res.send('유저가 확인되었습니다.');
}

exports.updateUser = function (req, res) {
    res.send('유저가 수정되었습니다.');
}

exports.deleteUser = function (req, res) {
    res.send('유저가 삭제되었습니다.');
}