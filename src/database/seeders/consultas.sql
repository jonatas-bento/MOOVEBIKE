select * from users;
select * from packages;
select * from packinfo;
select * from rentals;
select * from sequelizemeta;

desc users;
desc packinfo;
desc rentals; 


-- Lista Todos os Rentals -- 
SELECT u.id as user_id, 
      u.name as user_name, 
      u.email, p.id as pack_id, 
      p.name as pack_name, 
      p.price as pack_price, 
      p.period as pack_period, 
      p.eletric, r.id as rental_id, 
      r.pick_up, 
      r.drop_off, 
      r.actual_drop, 
      r.packActive 
      FROM users u 
      INNER JOIN rentals r ON u.id = r.user_id 
      INNER JOIN packages p ON p.id = r.pack_id


-- Lista Apenas os Rentals que ainda não foram ativados -- 
SELECT u.id as user_id, 
      u.name as user_name, 
      u.email, 
      p.id as pack_id, 
      p.name as pack_name, 
      p.price as pack_price, 
      p.period as pack_period, 
      p.eletric, r.id as rental_id, 
      r.pick_up, 
      r.drop_off, 
      r.actual_drop, 
      r.packActive 
      FROM users u 
      INNER JOIN rentals r 
      ON u.id = r.user_id 
      INNER JOIN packages p 
      ON p.id = r.pack_id 
      WHERE r.pick_up is null


-- Restrição da tabela packinfo e packages -- 

      ALTER TABLE `packinfo` add constraint  `packinfo_ibfk_1` FOREIGN KEY (`pack_id`) REFERENCES `packages` (`id`) on delete cascade;
      ALTER TABLE `packinfo` drop constraint  `packinfo_ibfk_1`