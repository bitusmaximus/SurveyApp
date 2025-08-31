
CREATE DATABASE IF NOT EXISTS cbtp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE cbtp;
CREATE TABLE IF NOT EXISTS household ( id BIGINT PRIMARY KEY AUTO_INCREMENT, city VARCHAR(128), kebele VARCHAR(128), got VARCHAR(128), house_number VARCHAR(64), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS response ( id BIGINT PRIMARY KEY AUTO_INCREMENT, household_id BIGINT NOT NULL, interviewer_name VARCHAR(128), interviewer_signature VARCHAR(128), started_at DATETIME NULL, verified_by_supervisor TINYINT(1) DEFAULT 0, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, CONSTRAINT fk_response_household FOREIGN KEY (household_id) REFERENCES household(id) ON DELETE CASCADE ) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS response_answer ( id BIGINT PRIMARY KEY AUTO_INCREMENT, response_id BIGINT NOT NULL, question_code VARCHAR(64) NOT NULL, answer_text TEXT, CONSTRAINT fk_answer_response FOREIGN KEY (response_id) REFERENCES response(id) ON DELETE CASCADE, INDEX (response_id), INDEX (question_code) ) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS household_member ( id BIGINT PRIMARY KEY AUTO_INCREMENT, response_id BIGINT NOT NULL, full_name VARCHAR(255), relationship VARCHAR(64), sex ENUM('M','F') NULL, age_years INT NULL, religion VARCHAR(128) NULL, education_level VARCHAR(128) NULL, occupation VARCHAR(128) NULL, marital_status VARCHAR(128) NULL, CONSTRAINT fk_member_response FOREIGN KEY (response_id) REFERENCES response(id) ON DELETE CASCADE, INDEX (response_id) ) ENGINE=InnoDB;
-- my code\-
use cbtpAlkan;
CREATE DATABASE IF NOT EXISTS cbtpAlkan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE TABLE IF NOT EXISTS interviewer ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
interviewer_name VARCHAR(128),
 started_at DATETIME NULL,  
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS interviewee ( id BIGINT PRIMARY KEY AUTO_INCREMENT,interviewer_id BIGINT NOT NULL,interviewee_name VARCHAR(128), 
city VARCHAR(128), 
kebele VARCHAR(128) ,
ketena VARCHAR(128), 
no_home VARCHAR(128),CONSTRAINT fk_interviewee_interviewer FOREIGN KEY (interviewer_id) REFERENCES interviewer(id) ON DELETE CASCADE)ENGINE=InnoDB ;
CREATE TABLE IF NOT EXISTS section ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
interviewer_id BIGINT NOT NULL,interviewee_id BIGINT NOT NULL,section_name VARCHAR(128),CONSTRAINT fk_section_interviewer FOREIGN KEY (interviewer_id) REFERENCES interviewer(id) ON DELETE CASCADE,CONSTRAINT fk_section_interviewee FOREIGN KEY (interviewee_id) REFERENCES interviewee(id) ON DELETE CASCADE)ENGINE=InnoDB ;
CREATE TABLE IF NOT EXISTS socio_population ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
family_name VARCHAR(128), 
family_sex VARCHAR(128), 
family_member_level VARCHAR(128) ,
family_religion VARCHAR(128), 
family_education_level VARCHAR(128),
family_job_status VARCHAR(128),
family_marital_status VARCHAR(128), 
CONSTRAINT fk_socio_population_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;

CREATE TABLE IF NOT EXISTS family_income ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
income VARCHAR(128), 
income_source VARCHAR(128), 
CONSTRAINT fk_family_income_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;

CREATE TABLE IF NOT EXISTS environmental_health ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
home VARCHAR(128), 
no_of_rooms VARCHAR(128), 
size_of_rooms VARCHAR(128) ,
no_of_people VARCHAR(128), 
home_clean VARCHAR(128),
air_serculation VARCHAR(128),
home_brightness VARCHAR(128), 
animal VARCHAR(128), 
how_animal VARCHAR(128), 
CONSTRAINT fk_environmental_health_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;

CREATE TABLE IF NOT EXISTS source_of_energy ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
kitchen VARCHAR(128), 
open_cheminy VARCHAR(128), 
energy_source VARCHAR(128) ,
wood VARCHAR(128), 
electric VARCHAR(128),
fire_accident VARCHAR(128),
water VARCHAR(128), 
CONSTRAINT fk_source_of_energy_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;

CREATE TABLE IF NOT EXISTS water_related ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
water VARCHAR(128), 
river_water VARCHAR(128), 
water_heigen VARCHAR(128) ,
water_fetching VARCHAR(128), 
common_jug VARCHAR(128),
no_minute VARCHAR(128), 
CONSTRAINT fk_water_related_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;

CREATE TABLE IF NOT EXISTS food_preparation_heigen ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
dish_wash VARCHAR(128), 
dish_drying VARCHAR(128), 
dish_placing VARCHAR(128) ,
food_placing VARCHAR(128), 
leftover_food VARCHAR(128),
leftover_food_yes VARCHAR(128), 
with_dihariya VARCHAR(128), 
touch_nose VARCHAR(128), 
cut_nail VARCHAR(128), 
before_cook VARCHAR(128), 
after_heign VARCHAR(128), 
after_toilet VARCHAR(128), 
after_touch VARCHAR(128), 
touch_money VARCHAR(128), 
wash_hand_with VARCHAR(128), 
CONSTRAINT fk_food_preparation_heigen_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;

CREATE TABLE IF NOT EXISTS toilet_related ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
exist_toilet VARCHAR(128), 
yes_exist_toilet VARCHAR(128), 
handle_toilet VARCHAR(128) ,
use_toilet_properly VARCHAR(128), 
distance_toilet_home VARCHAR(128),
leftover_food_yes VARCHAR(128), 
distance_toilet_kitchen VARCHAR(128), 
distance_toilet_water VARCHAR(128), 
exist_siphon_toilet VARCHAR(128), 
type_toilet VARCHAR(128), 
clean_toilet VARCHAR(128), 
palce_family_use_toilet VARCHAR(128), 
reason_not_have_toilet VARCHAR(128), 
dry_garbage VARCHAR(128), 
temp_garbage_bin VARCHAR(128), 
averall_cpd_heign VARCHAR(128), 
bouching_place VARCHAR(128), 
CONSTRAINT fk_toilet_related_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;

CREATE TABLE IF NOT EXISTS children_health ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
adult_female VARCHAR(128), 
maried_at VARCHAR(128), 
pregnant_women VARCHAR(128) ,
pregnacy_checkup VARCHAR(128), 
pregnacy_checkup_reason VARCHAR(128),
cuase_of_desease VARCHAR(128), 
first_birth_age VARCHAR(128), 
happened_abortion VARCHAR(128), 
no_abortion VARCHAR(128), 
no_maternal_dith VARCHAR(128), 
clean_toilet VARCHAR(128), 
palce_family_use_toilet VARCHAR(128), 
no_mothers_age_five VARCHAR(128), 
home_birth VARCHAR(128), 
hospital_birth VARCHAR(128), 
reason_for_home_birth VARCHAR(128), 
no_twin_birth VARCHAR(128), 
no_operation_birth VARCHAR(128), 
after_birth_checkup VARCHAR(128), 
CONSTRAINT fk_children_health_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;

CREATE TABLE IF NOT EXISTS family_plan ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
have_other_child VARCHAR(128), 
konow_controled_bith VARCHAR(128), 
yes_konow_controled_bith VARCHAR(128) ,
use_birth_control VARCHAR(128), 
yes_use_birth_control VARCHAR(128),
no_use_birth_control VARCHAR(128), 
future_use_birth_control VARCHAR(128), 
CONSTRAINT fk_family_plan_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;

CREATE TABLE IF NOT EXISTS children_vaccine ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
no_infant_vaccine VARCHAR(128), 
no_infant_vaccine_with_card VARCHAR(128), 
bcg_vaccine VARCHAR(128) ,
polio_vaccine VARCHAR(128), 
pentavalent_vaccine VARCHAR(128),
pcv_vaccine VARCHAR(128), 
rota_vaccine VARCHAR(128), 
mengagakolf_vaccine VARCHAR(128), 
from_mengagakolf_vaccine VARCHAR(128), 
one_time_mengagakolf_vaccine VARCHAR(128), 
two_times_mengagakolf_vaccine VARCHAR(128), 
three_times_mengagakolf_vaccine VARCHAR(128), 
four_times_mengagakolf_vaccine VARCHAR(128), 
five_times_mengagakolf_vaccine VARCHAR(128), 
pregnant_mengagakolf_vaccine VARCHAR(128), 
CONSTRAINT fk_children_vaccine_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;


CREATE TABLE IF NOT EXISTS children_illness ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
sick_under_five VARCHAR(128), 
yes_sick_under_five VARCHAR(128), 
no_epiglotis_cut VARCHAR(128) ,
no_out_child_tooth VARCHAR(128), 
no_eyeborow_makeup VARCHAR(128),
female_circumcession VARCHAR(128), 
in_14_days_diharea VARCHAR(128), 
treatment_for_diharea VARCHAR(128), 
reason_take_ors VARCHAR(128),  
CONSTRAINT fk_children_illness_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;


CREATE TABLE IF NOT EXISTS desease_in_society ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
p_desease_type VARCHAR(128), 
p_sex_desease VARCHAR(128), 
p_age_for_desease VARCHAR(128) ,
p_disability_type VARCHAR(128), 
p_sex_disability VARCHAR(128),
p_age_for_disability VARCHAR(128), 
medicated_at VARCHAR(128),  
CONSTRAINT fk_desease_in_society_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;


CREATE TABLE IF NOT EXISTS drug_usage ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
get_medicine_at VARCHAR(128), 
medicated_properly VARCHAR(128), 
consiquence_of_bad_medication VARCHAR(128) ,
traditional_medicine VARCHAR(128),
CONSTRAINT fk_drug_usage_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;
 
 
CREATE TABLE IF NOT EXISTS mental_illness ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
heared_about_mental_desease VARCHAR(128),
know_about_mental_problem VARCHAR(128), 
think_metal_desease_cominicable VARCHAR(128),  
exist_mentaly_ill_person VARCHAR(128),  
think_mental_illness_curable VARCHAR(128),  
family_mental_illness_medicated_at VARCHAR(128),  
exist_drug_user VARCHAR(128),  
think_drug_dangerous VARCHAR(128),   
CONSTRAINT fk_mental_illness_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;


 
CREATE TABLE IF NOT EXISTS eye_illness ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
konw_tracoma VARCHAR(128),
yes_know_tracoma_reason VARCHAR(128), 
think_control_tracoma VARCHAR(128),  
yes_think_control_tracoma VARCHAR(128),  
yes_know_tracoma_reason1 VARCHAR(128),  
exist_tracoma_victim VARCHAR(128),    
CONSTRAINT fk_eye_illness_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;

  
CREATE TABLE IF NOT EXISTS pregnacy_nutrition ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
exis_symptom_of_nemonea VARCHAR(128),
symptom_of_nemonea VARCHAR(128), 
lack_of_iron_in_prignancy VARCHAR(128),  
no_eat_in_pregnancy VARCHAR(128),  
no_eat_while_breast_feeding VARCHAR(128),  
type_of_food_no_pregnancy VARCHAR(128),   
CONSTRAINT fk_pregnacy_nutrition_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;

 
CREATE TABLE IF NOT EXISTS children_nutrition ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
start_breast_feeding_since VARCHAR(128),
feed_other_than_breast_after_birth VARCHAR(128), 
give_the_first_breast VARCHAR(128),  
feed_only_breast VARCHAR(128),  
how_long_feed_only_breast VARCHAR(128),  
no_wash_childs_hand_in_day VARCHAR(128),   
start_feed_food_at VARCHAR(128),   
not_feeding_food VARCHAR(128),   
type_food_given_first VARCHAR(128),   
type_of_dish_for_baby VARCHAR(128),   
still_breast_feeding VARCHAR(128),   
no_month_breast_feeding VARCHAR(128),   
muababy_agecm VARCHAR(128),   
baby_weight VARCHAR(128),   
baby_height VARCHAR(128),   
scratch_on_both_legs VARCHAR(128),   
CONSTRAINT fk_children_nutrition_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;

 
CREATE TABLE IF NOT EXISTS family_nutrition ( id BIGINT PRIMARY KEY AUTO_INCREMENT,
section_id BIGINT NOT NULL,
type_of_salt VARCHAR(128),
use_salt_at VARCHAR(128), 
place_salt_at VARCHAR(128),  
CONSTRAINT fk_family_nutrition_section_id FOREIGN KEY (section_id) REFERENCES section(id) ON DELETE CASCADE)ENGINE=InnoDB ;



use cbtpalkan;
CREATE TABLE `children_health` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `section_id` bigint NOT NULL,
  `adult_female` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maried_at` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pregnant_women` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pregnacy_checkup` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pregnacy_checkup_reason` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `happened_abortion` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `no_abortion` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `no_maternal_dith` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `home_birth` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hospital_birth` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `no-mothers-age-five` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,

  `reason_for_home_birth` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,

  `no_twin_birth` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,

  `no_operation_birth` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `after_birth_checkup` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,

  `after_birth_checkup_no` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,

  `h_pregnacy_checkup_reason` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,


  PRIMARY KEY (`id`),
  KEY `fk_children_health_section_id` (`section_id`),
  CONSTRAINT `fk_children_health_section_id` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




