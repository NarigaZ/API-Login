const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://narigaz:narigaz7@d4rks-j72np.mongodb.net/api-login?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
 });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

module.exports = mongoose;