<template>
  <div class="invite-apply-for">
    <div class="apply-for-container">
      <div class="apply-for-post">
        <span>应聘职位</span>
        <p>职位名称</p>
      </div>

      <el-form ref="ruleForm" :model="data.ruleForm" size="small" :inline="true" :rules="data.rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="data.ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-input v-model="data.ruleForm.gender"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="data.ruleForm.age"></el-input>
        </el-form-item>

        <el-form-item label="民族" prop="nation">
          <el-input v-model="data.ruleForm.nation"></el-input>
        </el-form-item>
        <el-form-item label="籍贯" prop="nativePlace">
          <el-input v-model="data.ruleForm.nativePlace"></el-input>
        </el-form-item>
        <el-form-item label="婚否" prop="maritalStatus">
          <el-input v-model="data.ruleForm.maritalStatus"></el-input>
        </el-form-item>

        <el-form-item label="学历" prop="educationBackground">
          <el-input v-model="data.ruleForm.educationBackground"></el-input>
        </el-form-item>
        <el-form-item label="政治面貌" prop="politicsStatus">
          <el-input v-model="data.ruleForm.politicsStatus"></el-input>
        </el-form-item>
        <el-form-item label="现所在地" prop="address">
          <el-input v-model="data.ruleForm.address"></el-input>
        </el-form-item>

        <el-form-item label="毕业院校" prop="school">
          <el-input v-model="data.ruleForm.school"></el-input>
        </el-form-item>
        <el-form-item label="所在专业" prop="major">
          <el-input v-model="data.ruleForm.major"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="data.ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="mail">
          <el-input v-model="data.ruleForm.mail"></el-input>
        </el-form-item>
        <el-form-item label="活动形式" prop="active">
          <el-input type="textarea" v-model="data.ruleForm.active"></el-input>
        </el-form-item>
      </el-form>

      <button @click="submitForm('ruleForm')">提交</button>

      <p>您可以将简历投至邮箱2423232@163.com, 或者电话联系 18888888888</p>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
export default {
  name: 'PCInviteApplyFor',
  setup(props, { root, refs }) {
    const data = reactive({
      labelWidth: 472,
      ruleForm: {
        name: '',
        gender: '',
        age: '',
        nation: '',
        nativePlace: '',
        maritalStatus: '',
        educationBackground: '',
        politicsStatus: '',
        address: '',
        school: '',
        major: '',
        phone: '',
        mail: '',
        active: '*',
      },
      rules: {
        name: [{ validator: validateName }],
        gender: [{ validator: validateGender }],
        age: [{ validator: validateAge }],
        nation: [{ validator: validateNation }],
        nativePlace: [{ validator: validateNativePlace }],
        maritalStatus: [{ validator: validateMarital }],
        educationBackground: [{ validator: validateEducat }],
        politicsStatus: [{ validator: validatePolitics }],
        address: [{ validator: validateAddress }],
        school: [{ validator: validateSchool }],
        major: [{ validator: validateMajor }],
        phone: [{ validator: validatePhone }],
        mail: [{ validator: validateMail }],
        active: [{ validator: validateActive }],
      },
    });
    const validateName = (rule, value, callback) => {
      if (!value) {
        callback();
      } else {
        if (data.ruleForm.name !== '') {
          refs.ruleForm.validateField('name');
        }
        callback();
      }
    };
    const validateGender = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else {
        if (data.ruleForm.gender !== '') {
          refs.ruleForm.validateField('gender');
        }
        callback();
      }
    };
    const validateAge = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else {
        if (data.ruleForm.age !== '') {
          refs.ruleForm.validateField('age');
        }
        callback();
      }
    };

    const validateNation = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else {
        if (data.ruleForm.nation !== '') {
          refs.ruleForm.validateField('nation');
        }
        callback();
      }
    };

    const validateNativePlace = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else {
        if (data.ruleForm.nativePlace !== '') {
          refs.ruleForm.validateField('nativePlace');
        }
        callback();
      }
    };

    const validateEducat = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else {
        if (data.ruleForm.educationBackground !== '') {
          refs.ruleForm.validateField('educationBackground');
        }
        callback();
      }
    };

    const validateMarital = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else {
        if (data.ruleForm.maritalStatus !== '') {
          refs.ruleForm.validateField('maritalStatus');
        }
        callback();
      }
    };

    const validatePolitics = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else {
        if (data.ruleForm.politicsStatus !== '') {
          refs.ruleForm.validateField('politicsStatus');
        }
        callback();
      }
    };

    const validateAddress = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else {
        if (data.ruleForm.address !== '') {
          refs.ruleForm.validateField('address');
        }
        callback();
      }
    };

    const validateSchool = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else {
        if (data.ruleForm.school !== '') {
          refs.ruleForm.validateField('school');
        }
        callback();
      }
    };

    const validateMajor = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('年龄不能为空'));
        // callback();
      } else {
        if (data.ruleForm.major !== '') {
          refs.ruleForm.validateField('major');
        }
        callback();
      }
    };

    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else {
        if (data.ruleForm.phone !== '') {
          refs.ruleForm.validateField('phone');
        }
        callback();
      }
    };

    const validateMail = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else {
        if (data.ruleForm.mail !== '') {
          refs.ruleForm.validateField('mail');
        }
        callback();
      }
    };

    const validateActive = (rule, value, callback) => {
      if (value === '') {
        callback();
      } else {
        if (data.ruleForm.active !== '') {
          refs.ruleForm.validateField('active');
        }
        callback();
      }
    };

    const submitForm = formName => {
      refs[formName].validate(valid => {
        if (valid) {
          root.$message({
            message: '提交成功',
            duration: 1500,
            type: 'success',
          });
        } else {
          root.$message({
            message: '提交失败',
            duration: 1500,
            type: 'error',
          });
          return false;
        }
      });
    };

    return { data, submitForm };
  },
};
</script>

<style lang="scss" scoped>
.invite-apply-for {
  width: 100%;
  background-color: #f6f6f6;
  padding-top: rem(90);
  margin-top: rem(-5);
  margin-bottom: -5rem;
  padding-bottom: 5rem;
  .apply-for-container {
    @include center();
    > p {
      width: 100%;
      padding-left: rem(36);
      height: rem(73);
      text-align: left;
      line-height: rem(73);
      color: #fff;
      background-color: $primary-color;
      font-size: rem(19);
      margin-top: rem(103);
      box-sizing: border-box;
    }
    .apply-for-post {
      display: flex;
      align-items: center;
      margin-bottom: rem(80);
      span {
        font-size: rem(19);
      }
      p {
        margin-left: rem(23);
        width: rem(374);
        height: rem(50);
        line-height: rem(50);
        color: #fff;
        font-size: rem(19);
        padding: 0 rem(24);
        background-color: $primary-color;
        box-sizing: border-box;
        @include ellipsis();
      }
    }
    button {
      position: absolute;
      right: rem(50);
      border: none;
      outline: none;
      background-color: $primary-color;
      color: #fff;
      font-size: rem(17);
      width: rem(120);
      height: rem(40);
      cursor: pointer;
    }
  }
}
</style>
<style lang="scss">
.el-form.el-form--inline {
  display: flex !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
}
.el-form-item--small.el-form-item {
  margin-bottom: rem(33) !important;
}
.el-form--inline .el-form-item {
  margin-right: 0 !important;
}
.el-form-item.el-form-item--small:nth-of-type(10),
.el-form-item.el-form-item--small:nth-of-type(11),
.el-form-item.el-form-item--small:nth-of-type(12),
.el-form-item.el-form-item--small:nth-of-type(13) {
  .el-form-item__content {
    width: rem(472);
  }
}
.el-form-item.el-form-item--small {
  .el-form-item__content {
    .el-textarea.el-input--small {
      textarea {
        resize: none;
        width: rem($primary-width - 112);
        height: rem(260);
      }
    }
  }
}
</style>
