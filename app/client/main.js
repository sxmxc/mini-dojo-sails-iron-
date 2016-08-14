AutoForm.addHooks('insertClientForm', {
  after: {
    insert: function(error, result) {
      if (error) {
        console.log("Insert Error:", error);
      } else {
        console.log("Document inserted:", result);
         Materialize.toast('Success!', 4000);
    }
}
}})






