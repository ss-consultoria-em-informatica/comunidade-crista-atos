// CREATE USER ss_consultor WITH
// 	LOGIN
// 	SUPERUSER
// 	CREATEDB
// 	CREATEROLE
// 	INHERIT
// 	NOREPLICATION
// 	CONNECTION LIMIT -1
// 	PASSWORD 'xxxxxx';
// GRANT postgres TO ss_consultor WITH ADMIN OPTION;
// COMMENT ON ROLE ss_consultor IS 'Usuário DBA para gestão de dados para aplicações da SS Consultoria.';