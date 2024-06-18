import { test, expect } from '@playwright/test';

test('Element state' , async ({ page}) => {
    await page.goto('https://auth.votify.app/')
    console.log(await page.getByPlaceholder('name@gmail.com').isEditable()); 
    console.log(await page.getByTestId('passwordInput').isEditable());
    console.log(await page.getByTestId('submitAction').isHidden());  
});
