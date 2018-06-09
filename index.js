#!/usr/bin/env node
const colors = require('colors');
const cmd = require('commander');

cmd
  .command('todo')
  .description('Todo list for this challenge')
  .action(function(){
    console.log('Tareas a realizar:'.green.bold);
    console.log('* Agregar un comando'.white, '\'help\''.blue.bold, 'para mostrar la lista de comandos disponibles'.white);
    console.log('* Agregar un comando'.white, '\'git\''.blue.bold, 'que liste los pasos a seguir para hacer un commit'.white);
    console.log('* Agregar un comando'.white, '\'linux\''.blue.bold, 'que muestre un link a los pasos a seguir para configurar linux en su máquina'.white);
    console.log('* Agregar un comando'.white, '\'clases\''.blue.bold, 'que muestre los horarios de clase de coderoom'.white);
  });

cmd
  .command('help')
  .description('Comandos disponibles')
  .action(function(){
    console.log('Comandos Disponibles')
    console.log('Estos son los comandos disponibles:'.red.bold);
    console.log('*'.white, '\'help\''.blue.bold, 'para mostrar la lista de comandos disponibles'.white);
    console.log('*'.white, '\'git\''.blue.bold, 'para listar los pasos a seguir para hacer un commit'.white);
    console.log('*'.white, '\'linux\''.blue.bold, 'para mostrar un link a los pasos a seguir para configurar linux en su máquina'.white);
    console.log('*'.white, '\'clases\''.blue.bold, 'para mostrar los horarios de clase de coderoom'.white);

  })

  cmd 
  .command('git')
  .description('lista de pasos para el commit:')
  .action(function(){
    console.log('Pasos para agregar un commit'.red.bold);
    console.log('1. Guardar todos los cambios en Visual Studio'.white);
    console.log('2.'.white, '\'git add .\''.blue.bold, 'para agregar todos los archivos'.white);
    console.log('3.'.white, '\'git commit -m "comentario"\''.blue.bold, 'para agregar insertar commit'.white);
    console.log('4.'.white, '\'git push origin master\''.blue.bold, 'para subir al repositorio los cambios'.white);
  });

  cmd
  .command('linux')
  .description('link a los pasos para configurar linux')
  .action(function(){
    console.log('Estos son los pasos a seguir para configurar linux en su máquina:'.red.bold);
    console.log('Haz clic en el siguiente link para ver las instrucciones:'.white);
    console.log(href='https://gist.github.com/vampaynani/a10e41b27c1ac1e2b3c43e091cc2ea31'.blue);
  });

  cmd
  .command('clases')
  .description('Horarios en Code Room')
  .action(function(){
    console.log('Horarios de clase Code Room:'.red.bold);
    console.log('lunes'.blue.bold, '8:00hrs-20:00hrs'.white);
    console.log('Miercoles'.blue.bold, '18:00hrs-21:00hrs'.white);
    console.log('Sábado'.blue.bold, '9:00hrs-13:00hrs'.white);
  });

  cmd.parse(process.argv);