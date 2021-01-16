window.addEventListener('load', () => {
    document.getElementById('peropero').addEventListener('click', () => {
        const userTableShown = document.getElementById('usersTable');
        if (userTableShown != null) {
            $('#userTable').html(``);
        } else {
            $.ajax('adminModules/adminUser_Show.php', {
                method: 'get',
                success: (data) => {
                    const parseData = JSON.parse(data);
                    console.log(parseData);
                    const collumsFromData = Object.keys(parseData[0]);
                    let userTableHTML = `<table class="table" id="usersTable"><tr>`;
                    for (let cd of collumsFromData) {
                        userTableHTML += `<td class="is-info">${cd}</td> `;
                    }

                    userTableHTML += `<td class="is-info">Update</td></tr>`;
                    for (let usrData of parseData) {
                        userTableHTML += `<tr>
                    <td>${usrData.userID}</td>  
                    <td>${usrData.username}</td> 
                    <td>${usrData.email}</td>
                    <td>${usrData.dob}</td>
                    <td><button class="button is-warning is-light is-outlined">Update</button></td>
                    </tr>`
                    }
                    userTableHTML += `</table>`;
                    $('#userTable').html(userTableHTML);


                }, error: () => {
                    console.log(`No info gotten from server`);
                }
            });
        }//if
    });
});