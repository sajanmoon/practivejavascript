async function errorHandling() {
  try {
    await Promise.reject('Error inside async function');
    console.log('This line should not be reached');
  } catch (error) {
    console.error(error);
  }
}

errorHandling();
