		mainBar = TwNewBar("Authority");

		//	Dump list of settings.xml vars to DbgView and Log. This should only be used for DEBUGGING purposes.
		//	Uncomment to dump the vars.
		// CONFIG::configDump();

		// <Main TW Bar>
		//TwBar *bar;
		//bar = TwNewBar("Authority");

		// TwDefine(" GLOBAL help='Welcome to Authority. For simplicity, all features are categorized into groups, which can be individually be expanded (opened) and collapsed (closed). The dimensions (size) of the module window can be adjusted by hovering your mouse over the corners, and click & drag the module to your desired size. The size of the font can also be toggled between small, medium, and large, by clicking the \"F\" button at the top-left corner of the module window. Finally, this help can be toggled by clicking the \"?\" icon located at the bottom-left corner of the game.' "); // Message added to the help bar.
		
		char twDefStr[4098];
		sprintf_s(twDefStr, " Authority label='Authority' movable=true resizable=true color='%i %i %i' position='%i %i' alpha=%i text=light size='%i %i' valueswidth=160 ", (int)barBgColor[0], (int)barBgColor[1], (int)barBgColor[2], Width - 410, 10, (int)barBgColor[3], 400, Height - 100);
		TwDefine(twDefStr);		

		// int barSize[2] = { 224, 320 };	//	Now in CONFIG.
		// TwSetParam(bar, NULL, "size", TW_PARAM_INT32, 2, barSize);

		OnlinePlayer opcb;
		// Online Player...
		TwAddVarCB(mainBar, "Index", TW_TYPE_INT32, OnlinePlayer::SetCurrentOPlayerCallback, OnlinePlayer::GetCurrentOPlayerCallback, &opcb, " min=0 max=30 group=Online");
		TwAddVarCB(mainBar, "Name", TW_TYPE_STDSTRING, OnlinePlayer::SetMyStdStringCB, OnlinePlayer::GetMyStdStringCB, &opcb, "group=Online");
		TwAddButton(mainBar, "Refresh List", OnlinePlayer::TRefreshList, NULL, "group=Online ");
		TwAddButton(mainBar, "Give Player Weapons", OnlinePlayer::TPlayer0, NULL, "group=Online ");
		TwAddButton(mainBar, "Teleport to Player", OnlinePlayer::TTPPlayer0, NULL, "group=Online ");
		int onlineplayers_opened = 0; //collapse players folder
		TwSetParam(mainBar, "Online", "opened", TW_PARAM_INT32, 1, &player_opened);
		
		// Online Player...

		// Player...
		Player cb;

		TwAddVarRW(mainBar, "Invincibility", TW_TYPE_BOOLCPP, &Player::godmode, "group=Player");
		TwAddVarRW(mainBar, "Off The Radar", TW_TYPE_BOOLCPP, &Player::offradar, "group=Player");
		TwAddVarRW(mainBar, "No Ragdoll", TW_TYPE_BOOLCPP, &Player::noragdoll, "group=Player");
		TwAddVarRW(mainBar, "Invisible", TW_TYPE_BOOLCPP, &Player::invisible, "group=Player");
		TwAddVarRW(mainBar, "Super Jump", TW_TYPE_BOOLCPP, &Player::superjump, "group=Player");
		TwAddVarRW(mainBar, "Never Wanted", TW_TYPE_BOOLCPP, &Player::neverwanted, "group=Player");
		TwAddVarRW(mainBar, "RP Loop", TW_TYPE_BOOLCPP, &Player::rp, "group=Player");
		TwAddVarRW(mainBar, "No Player Gravity", TW_TYPE_BOOLCPP, &Player::nogravity, "group=Player");
		TwAddVarRW(mainBar, "Tiny Player", TW_TYPE_BOOLCPP, &Player::tinyplayer, "group=Player");

		TwAddSeparator(mainBar, NULL, " group='Player' ");

		TwAddVarCB(mainBar, "Health", TW_TYPE_FLOAT, Player::SetHealthCallback, Player::GetHealthCallback, &cb, "group=Player");
		TwAddVarCB(mainBar, "Max Health", TW_TYPE_FLOAT, Player::SetMaxHealthCallback, Player::GetMaxHealthCallback, &cb, "group=Player");
		TwAddVarCB(mainBar, "Armor", TW_TYPE_FLOAT, Player::SetArmorCallback, Player::GetArmorCallback, &cb, "group=Player");
		TwAddVarCB(mainBar, "Stamina", TW_TYPE_FLOAT, Player::SetStaminaCallback, Player::GetStaminaCallback, &cb, "group=Player");
		TwAddVarCB(mainBar, "Max Stamina", TW_TYPE_FLOAT, Player::SetMaxStaminaCallback, Player::GetMaxStaminaCallback, &cb, "group=Player");
		TwAddVarCB(mainBar, "Z Coord", TW_TYPE_FLOAT, Player::SetZCoordCallback, Player::GetZCoordCallback, &cb, "group=Player");
		TwAddVarCB(mainBar, "Move Speed", TW_TYPE_FLOAT, Player::SetSpeedCallback, Player::GetSpeedCallback, &cb, "group=Player");
		TwAddVarCB(mainBar, "Swim Speed", TW_TYPE_FLOAT, Player::SetSwimSpeedCallback, Player::GetSwimSpeedCallback, &cb, "group=Player");
		TwAddVarCB(mainBar, "Damage Taken", TW_TYPE_FLOAT, Player::SetDamageTakenCallback, Player::GetDamageTakenCallback, &cb, "group=Player");

		int player_opened = 0; //collapse player folder
		TwSetParam(mainBar, "Player", "opened", TW_PARAM_INT32, 1, &player_opened);
		// Player...

		// Clothing...
		Clothing ccb;

		TwAddButton(mainBar, "Cop Oufit", Clothing::TCopOutFit, NULL, "group=Clothing ");
		TwAddButton(mainBar, "Female Cop Oufit", Clothing::TFCopOutFit, NULL, "group=Clothing ");

		TwAddButton(mainBar, "Santa Oufit", Clothing::TSantaOutFit, NULL, "group=Clothing ");
		TwAddButton(mainBar, "Female Santa Oufit", Clothing::TFSantaOutFit, NULL, "group=Clothing ");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Hat", TW_TYPE_INT32, Clothing::SetHatCallback, Clothing::GetHatCallback, &ccb, " min=0 max=55 group=Clothing");
		TwAddVarCB(mainBar, "Hat Texture", TW_TYPE_INT32, Clothing::SetHatExCallback, Clothing::GetHatExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Hat", Clothing::THats, NULL, "group=Clothing");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Glasses", TW_TYPE_INT32, Clothing::SetGlassCallback, Clothing::GetGlassCallback, &ccb, " min=0 max=23 group=Clothing");
		TwAddVarCB(mainBar, "Glasses Texture", TW_TYPE_INT32, Clothing::SetGlassExCallback, Clothing::GetGlassExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Glasses", Clothing::TGlass, NULL, "group=Clothing");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Earrings/Headpiece", TW_TYPE_INT32, Clothing::SetEarCallback, Clothing::GetEarCallback, &ccb, " min=0 max=3 group=Clothing");
		TwAddVarCB(mainBar, "Earrings/Headpiece Texture", TW_TYPE_INT32, Clothing::SetEarExCallback, Clothing::GetEarExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Earrings/Headpiece", Clothing::TEars, NULL, "group=Clothing");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Face", TW_TYPE_INT32, Clothing::SetFaceCallback, Clothing::GetFaceCallback, &ccb, " min=0 max=50 group=Clothing");
		TwAddVarCB(mainBar, "Face Texture", TW_TYPE_INT32, Clothing::SetFaceExCallback, Clothing::GetFaceExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Face", Clothing::TFace, NULL, "group=Clothing");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Mask", TW_TYPE_INT32, Clothing::SetMaskCallback, Clothing::GetMaskCallback, &ccb, " min=0 max=55 group=Clothing");
		TwAddVarCB(mainBar, "Mask Texture", TW_TYPE_INT32, Clothing::SetMaskExCallback, Clothing::GetMaskExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Mask", Clothing::TMask, NULL, "group=Clothing");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Hair", TW_TYPE_INT32, Clothing::SetHairCallback, Clothing::GetHairCallback, &ccb, " min=0 max=55 group=Clothing");
		TwAddVarCB(mainBar, "Hair Texture", TW_TYPE_INT32, Clothing::SetHairExCallback, Clothing::GetHairExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Hair", Clothing::THair, NULL, "group=Clothing");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Torso", TW_TYPE_INT32, Clothing::SetTorsoCallback, Clothing::GetTorsoCallback, &ccb, " min=0 max=50 group=Clothing");
		TwAddVarCB(mainBar, "Torso Texture", TW_TYPE_INT32, Clothing::SetTorsoExCallback, Clothing::GetTorsoExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Torso", Clothing::THats, NULL, "group=Clothing ");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Pants", TW_TYPE_INT32, Clothing::SetLegsCallback, Clothing::GetLegsCallback, &ccb, " min=0 max=50 group=Clothing");
		TwAddVarCB(mainBar, "Pants Texture", TW_TYPE_INT32, Clothing::SetLegsExCallback, Clothing::GetLegsExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Pants", Clothing::TLegs, NULL, "group=Clothing ");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Hands", TW_TYPE_INT32, Clothing::SetHandsCallback, Clothing::GetHandsCallback, &ccb, " min=0 max=50 group=Clothing");
		TwAddVarCB(mainBar, "Hands Texture", TW_TYPE_INT32, Clothing::SetHandsExCallback, Clothing::GetHandsExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set 5", Clothing::THands, NULL, "group=Clothing ");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Shoes", TW_TYPE_INT32, Clothing::SetTextureCallback, Clothing::GetTextureCallback, &ccb, " min=0 max=50 group=Clothing");
		TwAddVarCB(mainBar, "Shoes Texture", TW_TYPE_INT32, Clothing::SetTextureExCallback, Clothing::GetTextureExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Shoes", Clothing::TTexture, NULL, "group=Clothing ");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Neck", TW_TYPE_INT32, Clothing::SetShoesCallback, Clothing::GetShoesCallback, &ccb, " min=0 max=50 group=Clothing");
		TwAddVarCB(mainBar, "Neck Texture", TW_TYPE_INT32, Clothing::SetShoesExCallback, Clothing::GetShoesExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Neck", Clothing::TShoes, NULL, "group=Clothing ");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Shirt", TW_TYPE_INT32, Clothing::SetSpecial1Callback, Clothing::GetSpecial1Callback, &ccb, " min=0 max=50 group=Clothing");
		TwAddVarCB(mainBar, "Shirt Texture", TW_TYPE_INT32, Clothing::SetSpecial1ExCallback, Clothing::GetSpecial1ExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Shirt", Clothing::TSpecial1, NULL, "group=Clothing ");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Armor", TW_TYPE_INT32, Clothing::SetSpecial2Callback, Clothing::GetSpecial2Callback, &ccb, " min=0 max=50 group=Clothing");
		TwAddVarCB(mainBar, "Armor Texture", TW_TYPE_INT32, Clothing::SetSpecial2ExCallback, Clothing::GetSpecial2ExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Armor", Clothing::TSpecial2, NULL, "group=Clothing ");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");

		TwAddVarCB(mainBar, "Emblem", TW_TYPE_INT32, Clothing::SetSpecial3Callback, Clothing::GetSpecial3Callback, &ccb, " min=0 max=100 group=Clothing");
		TwAddVarCB(mainBar, "Emblem Texture", TW_TYPE_INT32, Clothing::SetSpecial3ExCallback, Clothing::GetSpecial3ExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Emblem", Clothing::TSpecial3, NULL, "group=Clothing ");

		TwAddSeparator(mainBar, NULL, " group='Clothing' ");


		TwAddVarCB(mainBar, "Jacket", TW_TYPE_INT32, Clothing::SetTorso2Callback, Clothing::GetTorso2Callback, &ccb, " min=0 max=100 group=Clothing");
		TwAddVarCB(mainBar, "Jacket Texture", TW_TYPE_INT32, Clothing::SetTorso2ExCallback, Clothing::GetTorso2ExCallback, &ccb, " min=0 max=10 group=Clothing");
		TwAddButton(mainBar, "Set Jacket", Clothing::TTorso2, NULL, "group=Clothing ");



		int clothing_opened = 0; //collapse player folder
		TwSetParam(mainBar, "Clothing", "opened", TW_PARAM_INT32, 1, &clothing_opened);
		// Clothing...

		// Weapon...
		Weapon wcb;
		TwAddButton(mainBar, "Fill Ammo", Weapon::FillWeapon, NULL, "group=Weapon ");
		TwAddButton(mainBar, "Unlimited Ammo", Weapon::TUClip, NULL, "group=Weapon ");
		TwAddButton(mainBar, "Give Weapons", Weapon::TGiveWeapons, NULL, "group=Weapon ");

		TwAddSeparator(mainBar, NULL, " group='Weapon' ");

		TwAddVarRW(mainBar, "Explosive Melee", TW_TYPE_BOOLCPP, &Weapon::explosivemelee, "group=Weapon");
		TwAddVarRW(mainBar, "Explosive Ammo", TW_TYPE_BOOLCPP, &Weapon::explosiveammo, "group=Weapon");
		TwAddVarRW(mainBar, "Fire Ammo", TW_TYPE_BOOLCPP, &Weapon::fireammo, "group=Weapon");

		TwAddSeparator(mainBar, NULL, " group='Weapon' ");

		TwAddVarCB(mainBar, "Clip Size", TW_TYPE_INT32, Weapon::SetClipSizeCallback, Weapon::GetClipSizeCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Accuracy Spread", TW_TYPE_FLOAT, Weapon::SetAccuracySpreadCallback, Weapon::GetAccuracySpreadCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Accurate Mode Accuracy Modifier", TW_TYPE_FLOAT, Weapon::SetAccurateModeAccuracyModifierCallback, Weapon::GetAccurateModeAccuracyModifierCallback, &wcb, "group=Weapon");
		// TwAddSeparator(mainBar, NULL, NULL);
		TwAddSeparator(mainBar, NULL, " group='Weapon' ");
		TwAddVarCB(mainBar, "Run and Gun Accuracy Modifier", TW_TYPE_FLOAT, Weapon::SetRunAndGunAccuracyModifierCallback, Weapon::GetRunAndGunAccuracyModifierCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Run and Gun Accuracy Min Override", TW_TYPE_FLOAT, Weapon::SetRunAndGunAccuracyMinOverrideCallback, Weapon::GetRunAndGunAccuracyMinOverrideCallback, &wcb, "group=Weapon");
		// TwAddSeparator(mainBar, NULL, NULL);
		TwAddSeparator(mainBar, NULL, " group='Weapon' ");
		TwAddVarCB(mainBar, "Recoil Accuracy Max", TW_TYPE_FLOAT, Weapon::SetRecoilAccuracyMaxCallback, Weapon::GetRecoilAccuracyMaxCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Recoil Error Time", TW_TYPE_FLOAT, Weapon::SetRecoilErrorTimeCallback, Weapon::GetRecoilErrorTimeCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Recoil Recovery Rate", TW_TYPE_FLOAT, Weapon::SetRecoilRecoveryRateCallback, Weapon::GetRecoilRecoveryRateCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Recoil Accuracy To Allow HeadShot Distance Player", TW_TYPE_FLOAT, Weapon::SetRecoilAccuracyToAllowHeadShotDistancePlayerCallback, Weapon::GetRecoilAccuracyToAllowHeadShotDistancePlayerCallback, &wcb, "group=Weapon");
		// TwAddSeparator(mainBar, NULL, NULL);
		TwAddSeparator(mainBar, NULL, " group='Weapon' ");
		TwAddVarCB(mainBar, "Min HeadShot Distance Player", TW_TYPE_FLOAT, Weapon::SetMinHeadShotDistancePlayerCallback, Weapon::GetMinHeadShotDistancePlayerCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Max HeadShot Distance Player", TW_TYPE_FLOAT, Weapon::SetMaxHeadShotDistancePlayerCallback, Weapon::GetMaxHeadShotDistancePlayerCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "HeadShot Damage Modifier Player", TW_TYPE_FLOAT, Weapon::SetHeadShotDamageModifierPlayerCallback, Weapon::GetHeadShotDamageModifierPlayerCallback, &wcb, "group=Weapon");
		// TwAddSeparator(mainBar, NULL, NULL);
		TwAddSeparator(mainBar, NULL, " group='Weapon' ");
		TwAddVarCB(mainBar, "Damage", TW_TYPE_FLOAT, Weapon::SetDamageCallback, Weapon::GetDamageCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Force", TW_TYPE_FLOAT, Weapon::SetForceCallback, Weapon::GetForceCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Force Hit Ped", TW_TYPE_FLOAT, Weapon::SetForceHitPedCallback, Weapon::GetForceHitPedCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Force Hit Vehicle", TW_TYPE_FLOAT, Weapon::SetForceHitVehicleCallback, Weapon::GetForceHitVehicleCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Force Hit Flying Heli", TW_TYPE_FLOAT, Weapon::SetForceHitFlyingHeliCallback, Weapon::GetForceHitFlyingHeliCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Force Mass Strength Multi", TW_TYPE_FLOAT, Weapon::SetForceMassStrengthMultCallback, Weapon::GetForceMassStrengthMultCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Force Falloff Range Start", TW_TYPE_FLOAT, Weapon::SetForceFalloffRangeStartCallback, Weapon::GetForceFalloffRangeStartCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Force Falloff Range End", TW_TYPE_FLOAT, Weapon::SetForceFalloffRangeEndCallback, Weapon::GetForceFalloffRangeEndCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Force Falloff Min", TW_TYPE_FLOAT, Weapon::SetForceFalloffMinCallback, Weapon::GetForceFalloffMinCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Projectile Force", TW_TYPE_FLOAT, Weapon::SetProjectileForceCallback, Weapon::GetProjectileForceCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Frag Impulse", TW_TYPE_FLOAT, Weapon::SetFragImpulseCallback, Weapon::GetFragImpulseCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Penetration", TW_TYPE_FLOAT, Weapon::SetPenetrationCallback, Weapon::GetPenetrationCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Bullets In Batch", TW_TYPE_INT32, Weapon::SetBulletsInBatchCallback, Weapon::GetBulletsInBatchCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Batch Spread", TW_TYPE_FLOAT, Weapon::SetBatchSpreadCallback, Weapon::GetBatchSpreadCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Time Between Shots", TW_TYPE_FLOAT, Weapon::SetTimeBetweenShotsCallback, Weapon::GetTimeBetweenShotsCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Time Left Between Shots Cached Fired", TW_TYPE_FLOAT, Weapon::SetTimeLeftBetweenShotsWhereShouldFireIsCachedCallback, Weapon::GetTimeLeftBetweenShotsWhereShouldFireIsCachedCallback, &wcb, "group=Weapon");
		// TwAddSeparator(mainBar, NULL, NULL);
		TwAddSeparator(mainBar, NULL, " group='Weapon' ");
		TwAddVarCB(mainBar, "Tracer Fx Chance SP", TW_TYPE_FLOAT, Weapon::SetTracerFxChanceSPCallback, Weapon::GetTracerFxChanceSPCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Tracer Fx Chance MP", TW_TYPE_FLOAT, Weapon::SetTracerFxChanceMPCallback, Weapon::GetTracerFxChanceMPCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Flash Fx Chance SP", TW_TYPE_FLOAT, Weapon::SetFlashFxChanceSPCallback, Weapon::GetFlashFxChanceSPCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Flash Fx Chance MP", TW_TYPE_FLOAT, Weapon::SetFlashFxChanceMPCallback, Weapon::GetFlashFxChanceMPCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Flash Fx Scale", TW_TYPE_FLOAT, Weapon::SetFlashFxScaleCallback, Weapon::GetFlashFxScaleCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Lock On Range", TW_TYPE_FLOAT, Weapon::SetLockOnRangeCallback, Weapon::GetLockOnRangeCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Weapon Range", TW_TYPE_FLOAT, Weapon::SetWeaponRangeCallback, Weapon::GetWeaponRangeCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Damage FallOff Range Min", TW_TYPE_FLOAT, Weapon::SetDamageFallOffRangeMinCallback, Weapon::GetDamageFallOffRangeMinCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Damage FallOff Range Max", TW_TYPE_FLOAT, Weapon::SetDamageFallOffRangeMaxCallback, Weapon::GetDamageFallOffRangeMaxCallback, &wcb, "group=Weapon");
		TwAddVarCB(mainBar, "Damage FallOff Modifier", TW_TYPE_FLOAT, Weapon::SetDamageFallOffModifierCallback, Weapon::GetDamageFallOffModifierCallback, &wcb, "group=Weapon");
	
		TwSetParam(mainBar, "Weapon", "opened", TW_PARAM_INT32, 1, &weapon_opened);
		// Weapon...



		Vehicle vcb;
		TwAddButton(mainBar, "Fix Vehicle", Vehicle::TFixVehicle, NULL, "group=Vehicle ");
		TwAddVarCB(mainBar, "Mod Index", TW_TYPE_INT32, Vehicle::SetVehicleModIndexCallback, Vehicle::GetVehicleModIndexCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Mod Name", TW_TYPE_STDSTRING, Vehicle::SetMyStdStringCB, Vehicle::GetMyStdStringCB, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Mod Selection", TW_TYPE_INT32, Vehicle::SetVehicleModNumberCallback, Vehicle::GetVehicleModNumberCallback, &vcb, "group=Vehicle");
		TwAddButton(mainBar, "Upgrade Vehicle", Vehicle::TMaxVehicle, NULL, "group=Vehicle ");

		TwAddSeparator(mainBar, NULL, " group='Vehicle' ");

		TwAddVarCB(mainBar, "Primary R", TW_TYPE_INT32, Vehicle::SetVehicleRCallback, Vehicle::GetVehicleRCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Primary G", TW_TYPE_INT32, Vehicle::SetVehicleGCallback, Vehicle::GetVehicleGCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Primary B", TW_TYPE_INT32, Vehicle::SetVehicleBCallback, Vehicle::GetVehicleBCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Secondary R", TW_TYPE_INT32, Vehicle::SetVehicle2RCallback, Vehicle::GetVehicle2RCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Secondary G", TW_TYPE_INT32, Vehicle::SetVehicle2GCallback, Vehicle::GetVehicle2GCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Secondary B", TW_TYPE_INT32, Vehicle::SetVehicle2BCallback, Vehicle::GetVehicle2BCallback, &vcb, "group=Vehicle");
		TwAddButton(mainBar, "Paint Primary", Vehicle::TPaintVehicle, NULL, "group=Vehicle ");
		TwAddButton(mainBar, "Paint Secondary", Vehicle::TPaint2Vehicle, NULL, "group=Vehicle ");

		TwAddSeparator(mainBar, NULL, " group='Vehicle' ");

		TwAddVarRW(mainBar, "Vehicle Invincibility", TW_TYPE_BOOLCPP, &Vehicle::vehgodmode, "group=Vehicle");
		TwAddVarRW(mainBar, "Bulletproof Tires", TW_TYPE_BOOLCPP, &Vehicle::bptires , "group=Vehicle");

		TwAddSeparator(mainBar, NULL, " group='Vehicle' ");
		TwAddVarCB(mainBar, "Acceleration", TW_TYPE_FLOAT, Vehicle::SetVehicleSpeedCallback, Vehicle::GetVehicleSpeedCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Mass", TW_TYPE_FLOAT, Vehicle::SetVehicleMassCallback, Vehicle::GetVehicleMassCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Gravity", TW_TYPE_FLOAT, Vehicle::SetVehicleGravityCallback, Vehicle::GetVehicleGravityCallback, &vcb, "group=Vehicle");
		
		TwAddSeparator(mainBar, NULL, " group='Vehicle' ");

		TwAddVarCB(mainBar, "Initial Drive Force", TW_TYPE_FLOAT, Vehicle::SetVehicleInitialDriveForceCallback, Vehicle::GetVehicleInitialDriveForceCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Steering Lock", TW_TYPE_FLOAT, Vehicle::SetVehicleSteringCallback, Vehicle::GetVehicleSteringCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Brake Force", TW_TYPE_FLOAT, Vehicle::SetVehicleBrakeForceCallback, Vehicle::GetVehicleBrakeForceCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Suspension Force", TW_TYPE_FLOAT, Vehicle::SetVehicleSuspensionForceCallback, Vehicle::GetVehicleSuspensionForceCallback, &vcb, "group=Vehicle");
		
		TwAddSeparator(mainBar, NULL, " group='Vehicle' ");

		TwAddVarCB(mainBar, "Center of Mass X", TW_TYPE_FLOAT, Vehicle::SetVehicleCentreOfMassxCallback, Vehicle::GetVehicleCentreOfMassxCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Center of Mass Y", TW_TYPE_FLOAT, Vehicle::SetVehicleCentreOfMassyCallback, Vehicle::GetVehicleCentreOfMassyCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Center of Mass Z", TW_TYPE_FLOAT, Vehicle::SetVehicleCentreOfMasszCallback, Vehicle::GetVehicleCentreOfMasszCallback, &vcb, "group=Vehicle");
		
		TwAddSeparator(mainBar, NULL, " group='Vehicle' ");

		TwAddVarCB(mainBar, "Inertia Multiplier X", TW_TYPE_FLOAT, Vehicle::SetVehicleInertiaMultiplierxCallback, Vehicle::GetVehicleInertiaMultiplierxCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Inertia Multiplier Y", TW_TYPE_FLOAT, Vehicle::SetVehicleInertiaMultiplieryCallback, Vehicle::GetVehicleInertiaMultiplieryCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Inertia Multiplier Z", TW_TYPE_FLOAT, Vehicle::SetVehicleInertiaMultiplierzCallback, Vehicle::GetVehicleInertiaMultiplierzCallback, &vcb, "group=Vehicle");
		
		TwAddSeparator(mainBar, NULL, " group='Vehicle' ");

		TwAddVarCB(mainBar, "Up Shift", TW_TYPE_FLOAT, Vehicle::SetVehicleUpShiftCallback, Vehicle::GetVehicleUpShiftCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Down Shift", TW_TYPE_FLOAT, Vehicle::SetVehicleDownShiftCallback, Vehicle::GetVehicleDownShiftCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Corner Grip", TW_TYPE_FLOAT, Vehicle::SetVehicleCornerGripCallback, Vehicle::GetVehicleCornerGripCallback, &vcb, "group=Vehicle");
		TwAddVarCB(mainBar, "Line Grip", TW_TYPE_FLOAT, Vehicle::SetVehicleLineGripCallback, Vehicle::GetVehicleLineGripCallback, &vcb, "group=Vehicle");
		
		TwSetParam(mainBar, "Vehicle", "opened", TW_PARAM_INT32, 1, &vehicle_opened);
		// Vehicle...

		// Teleport...
		TwAddButton(mainBar, "Teleport to Waypoint", Teleport::Waypoint, NULL, "group=Teleport help='In GTA: V, this will attempt to teleport you to the waypoint set on your map. You must set a waypoint first, BEFORE using this feature.'");
		// TwAddSeparator(mainBar, NULL, NULL);
		TwAddSeparator(mainBar, NULL, " group='Teleport' ");
		TwAddButton(mainBar, "Teleport to Custom Location 1", Teleport::TLoadCustomTP1, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to Custom Location 2", Teleport::TLoadCustomTP2, NULL, "group=Teleport");	
		TwAddButton(mainBar, "Teleport to Custom Location 3", Teleport::TLoadCustomTP3, NULL, "group=Teleport");
		// TwAddSeparator(mainBar, NULL, NULL);
		TwAddSeparator(mainBar, NULL, " group='Teleport' ");
		TwAddButton(mainBar, "Teleport to LSC", Teleport::LSC, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to Maze", Teleport::Maze, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to Chiliad", Teleport::Chiliad, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to Zancudo", Teleport::Zancudo, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to MaskShop", Teleport::MaskShop, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to Ponsonbys", Teleport::Ponsonbys, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to Ammunation", Teleport::Ammunation, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to Airport", Teleport::Airport, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to Waterfall", Teleport::Waterfall, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to FIB", Teleport::FIB, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to Humane Labs 1", Teleport::HumaneLabs1, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to Humane Labs 2", Teleport::HumaneLabs2, NULL, "group=Teleport");
		TwAddButton(mainBar, "Teleport to Zancudo Tower", Teleport::ZancudoTower, NULL, "group=Teleport");
		
		TwSetParam(mainBar, "Teleport", "opened", TW_PARAM_INT32, 1, &teleport_opened);
		// Teleport...
		
		TwAddButton(mainBar, "Save Custom Location 1", Teleport::TSaveCustomTP1, NULL, "group='Menu Settings'");
		TwAddButton(mainBar, "Save Custom Location 2", Teleport::TSaveCustomTP2, NULL, "group='Menu Settings'");
		TwAddButton(mainBar, "Save Custom Location 3", Teleport::TSaveCustomTP3, NULL, "group='Menu Settings'");
		TwAddVarRW(mainBar, "Disable Controls", TW_TYPE_BOOLCPP, &Player::disablecontrol, "group='Menu Settings'");
		//TwSetParam(mainBar, " 'Authority/Menu Settings' ", "opened", TW_PARAM_INT32, 1, &settings_opened);
		//TwSetParam(mainBar, " Authority/'Menu Settings' ", "opened", TW_PARAM_INT32, 1, &settings_opened);
		TwDefine(" Authority/'Menu Settings'		opened=false");
