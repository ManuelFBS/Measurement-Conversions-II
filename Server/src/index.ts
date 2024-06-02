import app from './app';

function main() {
  const appListener = app.listen(app.get('port'), () => {
    console.log(
      `Server is running on port: ${app.get('port')}`,
    );
  });

  //   process.on('SIGINT', () => {
  //     console.log('Received SIGINT signal, shutting down...');
  //   });
  //   appListener.close();
}

main();
