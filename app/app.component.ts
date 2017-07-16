import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `

  <ActionBar class="action-bar">
  <StackLayout class="action-bar-title">
    <Label text="Your App"></Label>
  </StackLayout>
</ActionBar>
   <TabView selectedIndex="0"  (selectedIndexChange)="onIndexChanged($event)" sdkExampleTitle sdkToggleNavButton>
    <StackLayout *tabItem="{title: 'NativeScript'}">
        <Label text="NativeScript" class="m-15 h2 text-left" color="blue"></Label>
        <ScrollView>
            <StackLayout class="input-field">
			    <TextField hint="Option 1" class="input"></TextField>
			    <StackLayout class="hr-light"></StackLayout>
			  </StackLayout>

			  <!-- Option 2: An input with a label on top, and a bottom border -->
			  <StackLayout class="input-field">
			    <Label text="Option 2" class="label font-weight-bold m-b-5" ></Label>
			    <TextField class="input" ></TextField>
			    <StackLayout class="hr-light"></StackLayout>
			  </StackLayout>

			   <Label text="&#xf1e0;" class="Ficons"></Label>
			   <Label text="&#xf2ba;" class="Ficons"></Label>	


        </ScrollView>
    </StackLayout>
    <StackLayout *tabItem="{title: 'Icon'}">
        <Image class="m-t-30 m-b-15" src="res://icon" width="80" height="80"></Image>
        <Label text="NativeScript" textWrap="true" class="h2 m-x-auto" color="blue"></Label>
    </StackLayout>
</TabView>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
}
