Template: samba/run_mode
Type: select
Default: daemons
Choices: daemons, inetd
Choices-es: demonios, inetd
Description: How do you want to run Samba?
 The Samba services (nmbd and smbd) can run as normal daemons or 
 from inetd. Running as daemons is the recommended approach.
Description-es: ¿Cómo quiere que el Samba se ejecuta?
 Los servicios Samba (nmbd y smbd) pueden ejectuarse como demonios
 normales o desde el inetd.  Se recomienda que se ejecuten como demonios
 independientes.

Template: samba/generate_smbpasswd
Type: boolean
Default: false
Description: Create samba password file, /etc/samba/smbpasswd?
 To be compatible with the defaults in most versions of Windows,
 Samba must be configured to use encrypted passwords.  This requires
 user passwords to be stored in a file separate from /etc/passwd.
 This file can be created automatically, but the passwords must
 be added manually (by you or the user) by running smbpasswd,
 and you must arrange to keep it up-to-date in the future.  If
 you do not create it, you will have to reconfigure samba
 (and probably your client machines) to use plaintext passwords.
 See /usr/share/doc/samba/README.Debian for more details.
Description-es: ¿Crear el fichero de contraseñas /etc/samba/smbpasswd?
 Para quedarse compatible con el comportamiento por defecto de la
 mayoria de los sistemas Windows, hay que configurar el Samba que use
 contraseñas cifradas, lo cual demanda la creación de un fichero
 distinto del /etc/passwd donde se guarden las contraseñas de usuarios.
 Se puede crear el fichero automaticamente, aunque es necesario añadir
 las contraseñas a mano (del administrador o del usuario) con el
 mandato `smbpasswd' y hay que mantener las contraseñas al día.  Si no
 se crea este fichero, es imprescindible configurar el Samba (y a lo
 mejor los ordenadores Windows) a usar contraseñas no cifradas.  Véase
 /usr/share/doc/samba/README.Debian para informaciones más detalladas.

Template: samba/log_files_moved
Type: note
Description: Samba's log files have moved.
 Starting with the first packages of Samba 2.2 for Debian the log
 files for both Samba daemons (nmbd and smbd) are now stored in
 /var/log/samba/. The names of the files are log.nmbd and log.smbd,
 for nmbd and smbd respectively.
 .
 The old log files that were in /var/log/ will be moved to
 the new location for you.
Description-es: Se han trasladado los registros del Samba.
 A partir de los primeros paquetes del Samba 2.2 en Debian,
 los registros para los dos demonios del Samba (tanto nmbd como smbd)
 se encuentran en /var/log/samba/.  Los nombres de los registros del
 nmbd y del smbd son log.nmbd y log.smbd respectivamente.
