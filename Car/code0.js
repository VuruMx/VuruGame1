gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDCarBodyObjects1= [];
gdjs.New_32sceneCode.GDCarBodyObjects2= [];
gdjs.New_32sceneCode.GDCarBodyObjects3= [];
gdjs.New_32sceneCode.GDFrontWheelObjects1= [];
gdjs.New_32sceneCode.GDFrontWheelObjects2= [];
gdjs.New_32sceneCode.GDFrontWheelObjects3= [];
gdjs.New_32sceneCode.GDBackWheelObjects1= [];
gdjs.New_32sceneCode.GDBackWheelObjects2= [];
gdjs.New_32sceneCode.GDBackWheelObjects3= [];
gdjs.New_32sceneCode.GDPlatformObjects1= [];
gdjs.New_32sceneCode.GDPlatformObjects2= [];
gdjs.New_32sceneCode.GDPlatformObjects3= [];
gdjs.New_32sceneCode.GDBoxObjects1= [];
gdjs.New_32sceneCode.GDBoxObjects2= [];
gdjs.New_32sceneCode.GDBoxObjects3= [];
gdjs.New_32sceneCode.GDPillarObjects1= [];
gdjs.New_32sceneCode.GDPillarObjects2= [];
gdjs.New_32sceneCode.GDPillarObjects3= [];
gdjs.New_32sceneCode.GDRestartLevelObjects1= [];
gdjs.New_32sceneCode.GDRestartLevelObjects2= [];
gdjs.New_32sceneCode.GDRestartLevelObjects3= [];
gdjs.New_32sceneCode.GDRestartObjects1= [];
gdjs.New_32sceneCode.GDRestartObjects2= [];
gdjs.New_32sceneCode.GDRestartObjects3= [];
gdjs.New_32sceneCode.GDBackLightObjects1= [];
gdjs.New_32sceneCode.GDBackLightObjects2= [];
gdjs.New_32sceneCode.GDBackLightObjects3= [];
gdjs.New_32sceneCode.GDFrontLightObjects1= [];
gdjs.New_32sceneCode.GDFrontLightObjects2= [];
gdjs.New_32sceneCode.GDFrontLightObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_1 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBackWheelObjects1Objects = Hashtable.newFrom({"BackWheel": gdjs.New_32sceneCode.GDBackWheelObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlatformObjects1ObjectsGDgdjs_46New_9532sceneCode_46GDBoxObjects1Objects = Hashtable.newFrom({"Platform": gdjs.New_32sceneCode.GDPlatformObjects1, "Box": gdjs.New_32sceneCode.GDBoxObjects1});
gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FrontWheel"), gdjs.New_32sceneCode.GDFrontWheelObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDFrontWheelObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFrontWheelObjects2[i].getBehavior("Physics2").setLinearVelocityX(gdjs.New_32sceneCode.GDFrontWheelObjects2[i].getBehavior("Physics2").getLinearVelocityX() + (-(50)));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FrontWheel"), gdjs.New_32sceneCode.GDFrontWheelObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDFrontWheelObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFrontWheelObjects2[i].getBehavior("Physics2").setLinearVelocityX(gdjs.New_32sceneCode.GDFrontWheelObjects2[i].getBehavior("Physics2").getLinearVelocityX() + (100));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7635476);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CarBody"), gdjs.New_32sceneCode.GDCarBodyObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarBodyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarBodyObjects1[i].getBehavior("Physics2").setLinearVelocityY(-(1500));
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBackWheelObjects1Objects = Hashtable.newFrom({"BackWheel": gdjs.New_32sceneCode.GDBackWheelObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlatformObjects1ObjectsGDgdjs_46New_9532sceneCode_46GDBoxObjects1Objects = Hashtable.newFrom({"Platform": gdjs.New_32sceneCode.GDPlatformObjects1, "Box": gdjs.New_32sceneCode.GDBoxObjects1});
gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CarBody"), gdjs.New_32sceneCode.GDCarBodyObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarBodyObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarBodyObjects2[i].getBehavior("Physics2").setAngularVelocity(gdjs.New_32sceneCode.GDCarBodyObjects2[i].getBehavior("Physics2").getAngularVelocity() - (3));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CarBody"), gdjs.New_32sceneCode.GDCarBodyObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarBodyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarBodyObjects1[i].getBehavior("Physics2").setAngularVelocity(gdjs.New_32sceneCode.GDCarBodyObjects1[i].getBehavior("Physics2").getAngularVelocity() + (3));
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarBodyObjects1Objects = Hashtable.newFrom({"CarBody": gdjs.New_32sceneCode.GDCarBodyObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRestartLevelObjects1Objects = Hashtable.newFrom({"RestartLevel": gdjs.New_32sceneCode.GDRestartLevelObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.New_32sceneCode.GDRestartObjects1});
gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackWheel"), gdjs.New_32sceneCode.GDBackWheelObjects1);
gdjs.copyArray(runtimeScene.getObjects("CarBody"), gdjs.New_32sceneCode.GDCarBodyObjects1);
gdjs.copyArray(runtimeScene.getObjects("FrontWheel"), gdjs.New_32sceneCode.GDFrontWheelObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartLevel"), gdjs.New_32sceneCode.GDRestartLevelObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDFrontWheelObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFrontWheelObjects1[i].getBehavior("Physics2").addWheelJoint((gdjs.New_32sceneCode.GDFrontWheelObjects1[i].getPointX("")), (gdjs.New_32sceneCode.GDFrontWheelObjects1[i].getPointY("")), (gdjs.New_32sceneCode.GDCarBodyObjects1.length !== 0 ? gdjs.New_32sceneCode.GDCarBodyObjects1[0] : null), (( gdjs.New_32sceneCode.GDCarBodyObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarBodyObjects1[0].getPointX("FrontWheel")), (( gdjs.New_32sceneCode.GDCarBodyObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarBodyObjects1[0].getPointY("FrontWheel")), 0, 10, 1, false, 0, 0, false, gdjs.VariablesContainer.badVariable);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBackWheelObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBackWheelObjects1[i].getBehavior("Physics2").addWheelJoint((gdjs.New_32sceneCode.GDBackWheelObjects1[i].getPointX("")), (gdjs.New_32sceneCode.GDBackWheelObjects1[i].getPointY("")), (gdjs.New_32sceneCode.GDCarBodyObjects1.length !== 0 ? gdjs.New_32sceneCode.GDCarBodyObjects1[0] : null), (( gdjs.New_32sceneCode.GDCarBodyObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarBodyObjects1[0].getPointX("BackWheel")), (( gdjs.New_32sceneCode.GDCarBodyObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarBodyObjects1[0].getPointY("BackWheel")), 0, 10, 1, false, 0, 0, false, gdjs.VariablesContainer.badVariable);
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.4, "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDRestartLevelObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRestartLevelObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BackLight"), gdjs.New_32sceneCode.GDBackLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("CarBody"), gdjs.New_32sceneCode.GDCarBodyObjects1);
gdjs.copyArray(runtimeScene.getObjects("FrontLight"), gdjs.New_32sceneCode.GDFrontLightObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.New_32sceneCode.GDCarBodyObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarBodyObjects1[0].getPointX("")), 0.05), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.New_32sceneCode.GDCarBodyObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarBodyObjects1[0].getPointY("")), 0.05), "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBackLightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBackLightObjects1[i].setPosition((( gdjs.New_32sceneCode.GDCarBodyObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarBodyObjects1[0].getPointX("BackLight")),(( gdjs.New_32sceneCode.GDCarBodyObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarBodyObjects1[0].getPointY("BackLight")));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDFrontLightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFrontLightObjects1[i].setPosition((( gdjs.New_32sceneCode.GDCarBodyObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarBodyObjects1[0].getPointX("FrontLight")),(( gdjs.New_32sceneCode.GDCarBodyObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarBodyObjects1[0].getPointY("FrontLight")));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BackWheel"), gdjs.New_32sceneCode.GDBackWheelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.New_32sceneCode.GDBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.New_32sceneCode.GDPlatformObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBackWheelObjects1Objects, "Physics2", gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlatformObjects1ObjectsGDgdjs_46New_9532sceneCode_46GDBoxObjects1Objects, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BackWheel"), gdjs.New_32sceneCode.GDBackWheelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.New_32sceneCode.GDBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.New_32sceneCode.GDPlatformObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBackWheelObjects1Objects, "Physics2", gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlatformObjects1ObjectsGDgdjs_46New_9532sceneCode_46GDBoxObjects1Objects, true);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("CarBody"), gdjs.New_32sceneCode.GDCarBodyObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartLevel"), gdjs.New_32sceneCode.GDRestartLevelObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarBodyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRestartLevelObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "New scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.New_32sceneCode.GDRestartObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition2IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9747060);
}
}}
}
if (gdjs.New_32sceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "New scene");
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDCarBodyObjects1.length = 0;
gdjs.New_32sceneCode.GDCarBodyObjects2.length = 0;
gdjs.New_32sceneCode.GDCarBodyObjects3.length = 0;
gdjs.New_32sceneCode.GDFrontWheelObjects1.length = 0;
gdjs.New_32sceneCode.GDFrontWheelObjects2.length = 0;
gdjs.New_32sceneCode.GDFrontWheelObjects3.length = 0;
gdjs.New_32sceneCode.GDBackWheelObjects1.length = 0;
gdjs.New_32sceneCode.GDBackWheelObjects2.length = 0;
gdjs.New_32sceneCode.GDBackWheelObjects3.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDBoxObjects1.length = 0;
gdjs.New_32sceneCode.GDBoxObjects2.length = 0;
gdjs.New_32sceneCode.GDBoxObjects3.length = 0;
gdjs.New_32sceneCode.GDPillarObjects1.length = 0;
gdjs.New_32sceneCode.GDPillarObjects2.length = 0;
gdjs.New_32sceneCode.GDPillarObjects3.length = 0;
gdjs.New_32sceneCode.GDRestartLevelObjects1.length = 0;
gdjs.New_32sceneCode.GDRestartLevelObjects2.length = 0;
gdjs.New_32sceneCode.GDRestartLevelObjects3.length = 0;
gdjs.New_32sceneCode.GDRestartObjects1.length = 0;
gdjs.New_32sceneCode.GDRestartObjects2.length = 0;
gdjs.New_32sceneCode.GDRestartObjects3.length = 0;
gdjs.New_32sceneCode.GDBackLightObjects1.length = 0;
gdjs.New_32sceneCode.GDBackLightObjects2.length = 0;
gdjs.New_32sceneCode.GDBackLightObjects3.length = 0;
gdjs.New_32sceneCode.GDFrontLightObjects1.length = 0;
gdjs.New_32sceneCode.GDFrontLightObjects2.length = 0;
gdjs.New_32sceneCode.GDFrontLightObjects3.length = 0;

gdjs.New_32sceneCode.eventsList2(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
