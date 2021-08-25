insert into plant (id, name, age, type, special_instructions) values (1, 'Mo Dean', 3, 'Venus Fly Trap', 'Feed small spiders and bugs');
insert into plant (id, name, age, type, special_instructions) values (2, 'Kevin', 2, 'Cactus', 'Its a cactus..');

insert into scheduler (id, name, is_watered, is_fertilized, last_watered, next_watered, last_fertilized, next_fertilized) values (101, 'Mo Dean Schedule', true, true, '2021-08-17','2021-08-27','2021-07-30','2021-08-14');
insert into scheduler (id, name, is_watered, is_fertilized, last_watered, next_watered, last_fertilized, next_fertilized) values (102, 'Kevin Schedule', true, true, '2021-08-01','2021-08-31','2021-08-02','2021-08-20');

insert into scheduler_plants (schedulers_id, plants_id) values (101, 1);
insert into scheduler_plants (schedulers_id, plants_id) values (102, 2);